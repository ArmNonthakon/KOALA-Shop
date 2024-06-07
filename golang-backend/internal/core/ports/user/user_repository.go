package ports

import "github.com/ArmNonthakon/KOALA-Shop/internal/core/domain"

type UserRepository interface {
	AddNewUser(user domain.Users) error
	CheckLogin(user domain.InputLogin) (string, string, error)
}
