package ports

import "github.com/ArmNonthakon/KOALA-Shop/internal/core/domain"

type ProductService interface {
	ReqData() ([]domain.Product, error)
	ReqDataByCategory(category string) ([]domain.Product, error)
}
