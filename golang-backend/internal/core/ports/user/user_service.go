package ports

type UserService interface {
	GetUser(userName string, email string) error
}
