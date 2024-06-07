package http_adapter

import (
	"time"

	"github.com/ArmNonthakon/KOALA-Shop/internal/core/domain"
	ports "github.com/ArmNonthakon/KOALA-Shop/internal/core/ports/user"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt"
)

type UserHttpHandler struct {
	service ports.UserService
}

func NewUserHttpHandler(service ports.UserService) *UserHttpHandler {
	return &UserHttpHandler{service: service}
}
func (h *UserHttpHandler) GetInputRegister(c *fiber.Ctx) error {
	var input domain.InputRegister
	if err := c.BodyParser(&input); err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}
	if err := h.service.GetInputRegister(input); err != nil {
		return c.SendStatus(fiber.StatusNotAcceptable)
	}

	return c.SendStatus(fiber.StatusAccepted)
}
func (h *UserHttpHandler) GetInputLogin(c *fiber.Ctx) error {
	var input domain.InputLogin
	if err := c.BodyParser(&input); err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}
	resultUsername, isCorrectPass, err := h.service.GetInputLogin(input)
	if err != nil {
		return c.SendStatus(fiber.StatusNotFound)
	}
	if !isCorrectPass {
		return c.SendStatus(fiber.StatusNotAcceptable)
	}
	claims := jwt.MapClaims{
		"userName": resultUsername,
		"admin":    false,
		"exp":      time.Now().Add(time.Hour * 12).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	t, err := token.SignedString([]byte("koala0325687"))
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	// Create cookie
	cookie := new(fiber.Cookie)
	cookie.Name = "token"
	cookie.Value = t
	cookie.Expires = time.Now().Add(12 * time.Hour)
	cookie.SameSite = fiber.CookieSameSiteStrictMode
	// Set cookie
	c.Cookie(cookie)
	return c.Status(fiber.StatusAccepted).JSON(t)
}
