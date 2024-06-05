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
func (h *HttpHandler) GetUser(c *fiber.Ctx) error {
	var input domain.InputUser
	if err := c.BodyParser(&input); err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}
	if err := h.service.GetUser(input.Username, input.Email); err != nil {
		return c.SendStatus(fiber.ErrBadRequest.Code)
	}
	return c.SendStatus(fiber.StatusAccepted)
}
