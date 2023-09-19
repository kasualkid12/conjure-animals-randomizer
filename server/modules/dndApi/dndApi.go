package dndapi

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

func DndApi(api string) []byte {
	requestURL := fmt.Sprintf("https://www.dnd5eapi.co%s", api)

	res, err := http.Get(requestURL)
	if err != nil {
		log.Fatal("Error making http request: ", err)
	}

	body, err := io.ReadAll(res.Body)
	if err != nil {
		log.Fatal("Error reading response body: ", err)
	}

	return body
}