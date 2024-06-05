package ports

import "github.com/ArmNonthakon/KOALA-Shop/internal/core/domain"

type UserRepository interface {
	AddUser(user domain.User) error
}
