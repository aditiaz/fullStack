package transactiondto

import "time"

type TransactionRequest struct {
	HouseID    int       `json:"houseId" form:"houseId"`
	Checkin    time.Time `json:"checkin" form:"checkin"`
	Checkout   time.Time `json:"checkout" form:"checkout"`
	Total      int       `json:"total" form:"total"`
	Status     int       `json:"status" form:"status"`
	Attachment string    `json:"attachment" form:"attachment"`
}
