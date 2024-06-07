package gorm_adapters

import (
	"github.com/ArmNonthakon/KOALA-Shop/internal/core/domain"
	portsProduct "github.com/ArmNonthakon/KOALA-Shop/internal/core/ports/product"
	portsUser "github.com/ArmNonthakon/KOALA-Shop/internal/core/ports/user"
	"gorm.io/gorm"
)

type GormRepo struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) (portsUser.UserRepository, portsProduct.ProductRepository) {
	return &GormRepo{db: db}, &GormRepo{db: db}
}
func (d *GormRepo) AddNewUser(user domain.Users) error {
	if result := d.db.Create(&user); result.Error != nil {
		return result.Error
	}
	return nil
}

func (d *GormRepo) CheckLogin(user domain.InputLogin) (string, string, error) {
	data := domain.Users{}
	result := d.db.Find(&data, "userName= ?", user.Username)
	if result.Error != nil {
		return "", "", result.Error
	}
	return data.Username, data.Password, nil
}

func (d *GormRepo) ResData() ([]domain.Product, error) {
	data := []domain.Product{}
	result := d.db.Find(&data, "Isrecommend = true")
	if result.Error != nil {
		return data, result.Error
	}
	return data, nil
}
func (d *GormRepo) ResDataByCategory(category string) ([]domain.Product, error) {
	data := []domain.Product{}
	result := d.db.Find(&data, "category = ?", category)
	if result.Error != nil {
		return data, result.Error
	}
	return data, nil
}
