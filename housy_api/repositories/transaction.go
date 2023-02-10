package repositories

import (
	"housy/models"
	"gorm.io/gorm"
)

type TransactionRepository interface {

}

func RepositoryTransaction(db *gorm.DB) *repository{
	return &repository{db}
}

func (r *repository)FindTransaction([]models.Transaction,error){
	var transaction []models.Transaction
	err :=  r.db.Preload("Property.City").Preload("User.ListAs").Find($transaction).Error
	return transaction,err
}

