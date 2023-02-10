package models

import "time"

type Transaction struct {
	ID        int                  `json:"id" gorm:"primary_key:auto_increment"`
	CheckIn time.Time               `json:"checkin"`
	CheckOut time.Time              `json:"checkout"`
	HouseID int                  `json:"product_id"`
	House   PropertyResponse     `json:"product"`
	UserID   int                  `json:"buyer_id"`
	User     User					 `json:"user"`
	Total     int                 `json:"total" gorm:"type: varchar(255)"`
	Status    string               `json:"status"  gorm:"type:varchar(25)"`

}
