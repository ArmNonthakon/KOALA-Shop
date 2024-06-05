package core

import (
	"github.com/ArmNonthakon/KOALA-Shop/internal/core/domain"
	ports "github.com/ArmNonthakon/KOALA-Shop/internal/core/ports/user"
)

type userRepositoryIml struct {
	repo ports.UserRepository
}

func NewUserService(repo ports.UserRepository) ports.UserService {
	return &userRepositoryIml{repo: repo}
}

func (r *userRepositoryIml) GetUser(username string, email string) error {
	user := domain.User{
		ID:       "1458951",
		Username: username,
		Email:    email,
	}
	if err := r.repo.AddUser(user); err != nil {
		return err
	}
	return nil
}
