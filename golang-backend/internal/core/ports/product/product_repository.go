package ports

import "github.com/ArmNonthakon/KOALA-Shop/internal/core/domain"

type ProductRepository interface {
	ResData() ([]domain.Product, error)
	ResDataByCategory(category string) ([]domain.Product, error)
}
