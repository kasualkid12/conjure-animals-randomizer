package monsterData

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

func MonsterData(api string) {
	requestURL := fmt.Sprintf("https://www.dnd5eapi.co%s", api)

	res, err := http.Get(requestURL) 
	if err != nil {
		log.Fatal("Error making http request: ", err)
	}

	body, err := io.ReadAll(res.Body)
	if err != nil {
		log.Fatal("Error reading response body: ", err)
	}

	fmt.Println("Client: ", string(body))
	
}