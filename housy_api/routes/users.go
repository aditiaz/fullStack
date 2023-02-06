package routes

import (
	"housy/handlers"
	"housy/pkg/mysql"
	"housy/repositories"

	"github.com/gorilla/mux"
)

func UserRoutes(r *mux.Router) {
	userRepository := repositories.RepositoryUser(mysql.DB)
	h := handlers.HandlerUser(userRepository)

	// r.HandleFunc("/users", h.FindUsers).Methods("GET")
	r.HandleFunc("/user/{id}", h.GetUser).Methods("GET")
	r.HandleFunc("/user/{id}/changePassword", h.ChangePassword).Methods("PATCH")
	// r.HandleFunc("/user/changeImage/{id}", h.ChangeImage).Methods("PATCH")
	// r.HandleFunc("/user/{id}", h.DeleteUser).Methods("DELETE")
}