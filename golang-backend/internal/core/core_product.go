package core

import (
	"github.com/ArmNonthakon/KOALA-Shop/internal/core/domain"
	ports "github.com/ArmNonthakon/KOALA-Shop/internal/core/ports/product"
)

type ProductRepositoryIml struct {
	repo ports.ProductRepository
}

func NewProductRepository(repo ports.ProductRepository) ports.ProductService {
	return &ProductRepositoryIml{repo: repo}
}

func (r *ProductRepositoryIml) ReqData() ([]domain.Product, error) {
	data, err := r.repo.ResData()
	if err != nil {
		return data, err
	}
	return data, err
}
