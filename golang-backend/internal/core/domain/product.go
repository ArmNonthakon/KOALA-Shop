package domain

type product struct {
	ProductId   string `gorm:"primaryKey"`
	ProductName string `gorm:"not null"`
	Price       uint
	Size        string
	Gender      int
	Type        string
	Isrecommend bool
	VisitCount  int
}
