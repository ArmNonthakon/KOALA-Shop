package core

import (
	"github.com/ArmNonthakon/KOALA-Shop/internal/core/domain"
	ports "github.com/ArmNonthakon/KOALA-Shop/internal/core/ports/user"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}
func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

type userRepositoryIml struct {
	repo ports.UserRepository
}

func NewUserService(repo ports.UserRepository) ports.UserService {
	return &userRepositoryIml{repo: repo}
}

func (r *userRepositoryIml) GetInputRegister(user domain.InputRegister) error {
	bcryptPassword, err := HashPassword(user.Password)
	if err != nil {
		return err
	}
	newUser := domain.Users{
		UserId:   uuid.New(),
		Username: user.Username,
		Email:    user.Email,
		Password: bcryptPassword,
	}
	if err := r.repo.AddNewUser(newUser); err != nil {
		return err
	}
	return nil
}

func (r *userRepositoryIml) GetInputLogin(user domain.InputLogin) (bool, error) {
	result, err := r.repo.CheckLogin(user)
	if err != nil {
		return false, err
	}
	return CheckPasswordHash(user.Password, result), nil
}
