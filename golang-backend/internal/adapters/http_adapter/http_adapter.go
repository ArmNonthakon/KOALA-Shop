package http_adapter

import (
	"github.com/ArmNonthakon/KOALA-Shop/internal/core/domain"
	ports "github.com/ArmNonthakon/KOALA-Shop/internal/core/ports/user"
	"github.com/gofiber/fiber/v2"
)

type HttpHandler struct {
	service ports.UserService
}

func NewHttpHandler(service ports.UserService) *HttpHandler {
	return &HttpHandler{service: service}
}
func (h *HttpHandler) GetInputRegister(c *fiber.Ctx) error {
	var input domain.InputRegister
	if err := c.BodyParser(&input); err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}
	if err := h.service.GetInputRegister(input); err != nil {
		return c.SendStatus(fiber.StatusNotAcceptable)
	}

	return c.SendStatus(fiber.StatusAccepted)
}
func (h *HttpHandler) GetInputLogin(c *fiber.Ctx) error {
	var input domain.InputLogin
	if err := c.BodyParser(&input); err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}
	result, err := h.service.GetInputLogin(input)
	if err != nil {
		return c.SendStatus(fiber.StatusNotFound)
	}
	if !result {
		return c.SendStatus(fiber.StatusNotAcceptable)
	}

	return c.SendStatus(fiber.StatusAccepted)
}
