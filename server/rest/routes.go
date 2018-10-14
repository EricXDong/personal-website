package rest

import (
	"github.com/gorilla/mux"
)

func SetupRoutes() *mux.Router {
	r := mux.NewRouter()
	apiRouter := r.PathPrefix("/api/").Subrouter()

	apiRouter.HandleFunc("/contact", receiveContact)

	return r
}
