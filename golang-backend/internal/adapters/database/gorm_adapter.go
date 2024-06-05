package gorm_adapters

import (
	"github.com/ArmNonthakon/KOALA-Shop/internal/core/domain"
	ports "github.com/ArmNonthakon/KOALA-Shop/internal/core/ports/user"
	"gorm.io/gorm"
)

type GormRepo struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) ports.UserRepository {
	return &GormRepo{db: db}
}
func (d *GormRepo) AddNewUser(user domain.Users) error {
	if result := d.db.Create(&user); result.Error != nil {
		return result.Error
	}
	return nil
}

func (d *GormRepo) CheckLogin(user domain.InputLogin) (string, error) {
	data := domain.Users{}
	result := d.db.Find(&data, "userName= ?", user.Username)
	if result.Error != nil {
		return "", result.Error
	}
	return data.Password, nil
}
