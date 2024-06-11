package http_adapter

import (
	"fmt"

	"github.com/ArmNonthakon/KOALA-Shop/internal/core/domain"
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
func (s *ProductHttpHandler) GetProductByCategory(c *fiber.Ctx) error {
	var input domain.InputCategory
	if err := c.BodyParser(&input); err != nil {
		fmt.Println("fdsa")
		return c.SendStatus(fiber.StatusBadRequest)
	}
	data, err := s.service.ReqDataByCategory(input.Category)
	if err != nil {
		fmt.Println("as")
		return c.SendStatus(fiber.ErrBadRequest.Code)
	}
	return c.Status(fiber.StatusAccepted).JSON(data)
}
