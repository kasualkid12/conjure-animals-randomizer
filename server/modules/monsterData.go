package monsterData

import (
	"encoding/json"
	"log"
	"os"
)

type Data struct {
	Cr0_25 Monsters `json:"cr-0.25"`
	Cr0_5  Monsters `json:"cr-0.50"`
	Cr1    Monsters `json:"cr-1"`
	Cr2    Monsters `json:"cr-2"`
}

type Monster struct {
	Index string `json:"index"`
	Name  string `json:"name"`
	Url   string `json:"url"`
}

type Monsters struct {
	Count   int       `json:"count"`
	Results []Monster `json:"results"`
}

func GrabMonster() string {
	content, err := os.ReadFile("./data/monsters.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}

	var payload Data
	err = json.Unmarshal(content, &payload)
	if err != nil {
		log.Fatal("Error during unmarshal(): ", err)
	}

	return payload.Cr0_25.Results[0].Url
}