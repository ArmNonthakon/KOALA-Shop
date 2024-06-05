package domain

import "github.com/google/uuid"

type Users struct {
	UserId   uuid.UUID `gorm:"primaryKey"`
	Username string    `gorm:"unique"`
	Email    string    `gorm:"unique"`
	Password string
}
type InputLogin struct {
	Username string
	Password string
}
type InputRegister struct {
	Username string
	Email    string
	Password string
}
