package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/personal-website-server/rest"
)

func main() {
	r := rest.SetupRoutes()
	fmt.Println("Server listening on port 5000")
	log.Fatal(http.ListenAndServe(":5000", r))
}
