package http_adapter

import (
	ports "github.com/ArmNonthakon/KOALA-Shop/internal/core/ports/product"
	"github.com/gofiber/fiber/v2"
)

type ProductHttpHandler struct {
	service ports.ProductService
}

func NewProductHttpHandler(service ports.ProductService) *ProductHttpHandler {
	return &ProductHttpHandler{service: service}
}

func (s *ProductHttpHandler) ProductRecommend(c *fiber.Ctx) error {
	data, err := s.service.ReqData()
	if err != nil {
		return c.SendStatus(fiber.ErrBadRequest.Code)
	}
	return c.Status(fiber.StatusAccepted).JSON(data)
}
