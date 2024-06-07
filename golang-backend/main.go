package main

import (
	"net/http"
	"time"

	gorm_adapters "github.com/ArmNonthakon/KOALA-Shop/internal/adapters/database"
	"github.com/ArmNonthakon/KOALA-Shop/internal/adapters/http_adapter"
	"github.com/ArmNonthakon/KOALA-Shop/internal/core"
	"github.com/ArmNonthakon/KOALA-Shop/internal/core/domain"
	jwtware "github.com/gofiber/contrib/jwt"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/csrf"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	app := fiber.New()
	dsn := "host=aws-0-ap-southeast-1.pooler.supabase.com user=postgres.snpblspofpidyfveqljs password=Ninjaarm-20032546 dbname=koala port=5432 sslmode=disable TimeZone=Asia/Shanghai"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	db.AutoMigrate(&domain.Users{}, &domain.Product{})

	app.Use(cors.New(cors.Config{
		AllowMethods: "GET, POST, PUT, DELETE, OPTIONS",
	}))

	repositoryUser, repositoryProduct := gorm_adapters.NewUserRepository(db)
	serviceUser := core.NewUserService(repositoryUser)
	serviceProduct := core.NewProductRepository(repositoryProduct)
	userHttp := http_adapter.NewUserHttpHandler(serviceUser)
	productHttp := http_adapter.NewProductHttpHandler(serviceProduct)

	app.Post("/register", userHttp.GetInputRegister)
	app.Post("/login", userHttp.GetInputLogin)

	app.Use(jwtware.New(jwtware.Config{
		SigningKey:  jwtware.SigningKey{Key: []byte("koala0325687")},
		TokenLookup: "cookie:token",
	}))
	app.Use(csrf.New(csrf.Config{
		KeyLookup:      "header:X-CSRF-Token",
		CookieName:     "csrf_token",
		CookieSameSite: "Strict",
		Expiration:     10 * time.Second, // Adjust expiration time as per your requirement
		// Customize error handling for CSRF token validation failure
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			return c.Status(http.StatusBadRequest).JSON(fiber.Map{
				"error": "CSRF token validation failed",
			})
		},
	}))
	app.Get("/recommend", productHttp.ProductRecommend)
	app.Listen(":3000")
}
