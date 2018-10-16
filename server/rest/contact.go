package rest

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type ContactRequest struct {
	Email   string `json:"email"`
	Message string `json:"message"`
}

func receiveContact(w http.ResponseWriter, r *http.Request) {
	data, err := ioutil.ReadAll(r.Body)
	if err != nil {
		respondWithError(createHTTPBodyError(err), http.StatusBadRequest, &w)
		return
	}

	request := ContactRequest{}
	err = json.Unmarshal(data, &request)
	if err != nil {
		respondWithError(createJSONParseError(err), http.StatusBadRequest, &w)
	}

	fmt.Println(request.Email)
	fmt.Println(request.Message)

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("You have reached the email hotline yo"))
}
