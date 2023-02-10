package transactiondto

import (
	"housy/models"
) 

type CreateTransactionRequest struct {
	HouseID    int       `json:"houseid" form:"houseid"`
	House  models.Property `json:"house"`
	UserID     int          `json:"userid" form:"userid" validate:"required"`
    User       models.User   `json:"user"`
	Total      int       `json:"total" form:"total"`
	Status     int       `json:"status" form:"status"`
	Attachment string    `json:"attachment" form:"attachment"`
}

type UpdateTransactionRequest struct {
	Status string `json:"status" form:"status"`
}
