package domain

type Product struct {
	ProductId   string `gorm:"primaryKey"`
	ProductName string `gorm:"not null"`
	Price       uint
	Size        string
	Category    string
	Type        string
	Isrecommend bool
	VisitCount  int
	Src         string
}
type InputCategory struct {
	Category string
}
