package authdto

type LoginResponse struct {
	Username string `gorm:"type: varchar(255)" json:"username"`
	Token    string `gorm:"type: varchar(255)" json:"token"`
	ListAsId int    `gorm:"type: int" json:"list_as_id"`
}

type RegisterResponse struct {
	Username string `gorm:"type: varchar(255)" json:"username"`
	Message  string `gorm:"type: varchar(255)" json:"message"`
}
