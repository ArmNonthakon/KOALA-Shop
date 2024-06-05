package main

import (
	gorm_adapters "github.com/ArmNonthakon/KOALA-Shop/internal/adapters/database"
	"github.com/ArmNonthakon/KOALA-Shop/internal/adapters/http_adapter"
	"github.com/ArmNonthakon/KOALA-Shop/internal/core"
	"github.com/gofiber/fiber/v2"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	app := fiber.New()
	dsn := "host=aws-0-ap-southeast-1.pooler.supabase.com user=postgres.snpblspofpidyfveqljs password=Ninjaarm-20032546 dbname=catdata port=5432 sslmode=disable TimeZone=Asia/Shanghai"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	repository := gorm_adapters.NewUserRepository(db)
	service := core.NewUserService(repository)
	user := http_adapter.NewHttpHandler(service)

	app.Post("/addUser", user.GetUser)

	app.Listen(":3000")

}
