package core

import (
	"fmt"

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
func (r *ProductRepositoryIml) ReqDataByCategory(category string) ([]domain.Product, error) {
	examCategory := []string{"Clothes", "Bottom", "Socks and Shoes", "Acc"}
	isInCategory := false
	for _, item := range examCategory {
		if category == item {
			isInCategory = true
			break
		}
	}
	if !isInCategory {
		var errcategory = fmt.Errorf("don't have this category")
		return []domain.Product{}, errcategory
	}
	data, err := r.repo.ResDataByCategory(category)
	if err != nil {
		return data, err
	}
	return data, err
}
