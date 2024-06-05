package ports

import "github.com/ArmNonthakon/KOALA-Shop/internal/core/domain"

type UserService interface {
	GetInputRegister(user domain.InputRegister) error
	GetInputLogin(user domain.InputLogin) (bool, error)
}
