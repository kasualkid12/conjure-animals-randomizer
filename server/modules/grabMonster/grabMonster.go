package grabMonster

import (
	"encoding/json"
	"log"
	"math/rand"
	"os"
)

type Data struct {
	Cr0_25 Monsters `json:"cr-0.25"`
	Cr0_5  Monsters `json:"cr-0.5"`
	Cr1    Monsters `json:"cr-1"`
	Cr2    Monsters `json:"cr-2"`
}

type Monsters struct {
	Count   int   `json:"count"`
	Results []Api `json:"results"`
}

type Api struct {
	Index string `json:"index"`
	Name  string `json:"name"`
	Url   string `json:"url"`
}

// GrabMonster will parse the json file to randomly pick a monster of the chosen CR
func GrabMonster(cr string) string {
	content, err := os.ReadFile("./data/monsters.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}

	var payload Data
	err = json.Unmarshal(content, &payload)
	if err != nil {
		log.Fatal("Error during unmarshal(): ", err)
	}

	switch {
	case cr == "Cr0_25":
		num := rand.Intn(payload.Cr0_25.Count)
		return payload.Cr0_25.Results[num].Url
	case cr == "Cr0_5":
		num := rand.Intn(payload.Cr0_5.Count)
		return payload.Cr0_5.Results[num].Url
	case cr == "Cr1":
		num := rand.Intn(payload.Cr1.Count)
		return payload.Cr1.Results[num].Url
	case cr == "Cr2":
		num := rand.Intn(payload.Cr2.Count)
		return payload.Cr2.Results[num].Url
	default:
		return "No cr selected"
	}
}
