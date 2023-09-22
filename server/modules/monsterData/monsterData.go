package monsterData

import (
	"encoding/json"
	"log"

	dndapi "github.com/kasualkid12/conjure-animals-randomizer/modules/dndApi"
)

type Data struct {
	Index                 string             `json:"index"`
	Name                  string             `json:"name"`
	Size                  string             `json:"size"`
	Type                  string             `json:"type"`
	Alignment             string             `json:"alignment"`
	ArmorClass            []ArmorClass       `json:"armor_class"`
	HitPoints             int                `json:"hit_points"`
	HitDice               string             `json:"hit_dice"`
	HitPointsRoll         string             `json:"hit_points_roll"`
	Speed                 Speed              `json:"speed"`
	Strength              int                `json:"strength"`
	Dexterity             int                `json:"dexterity"`
	Constitution          int                `json:"constitution"`
	Intelligence          int                `json:"inteligence"`
	Wisdom                int                `json:"wisdom"`
	Charisma              int                `json:"charisma"`
	Proficiencies         []Proficiencies    `json:"proficiencies"`
	DamageVulnerabilities []string           `json:"damage_vulnerabilities"`
	DamageResistances     []string           `json:"damage_resistances"`
	DamageImmunities      []string           `json:"damage_immunities"`
	ConditionImmunities   []Api              `json:"condition_immunities"`
	Senses                Senses             `json:"senses"`
	Languages             string             `json:"languages"`
	ChallengeRating       float32            `json:"challenge_rating"`
	XP                    int                `json:"xp"`
	SpecialAbilities      []SpecialAbilities `json:"special_abilities"`
	Actions               []Actions          `json:"actions"`
	LegendaryActions      []LegendaryActions `json:"legendary_actions"`
	Image                 string             `json:"image"`
	Url                   string             `json:"url"`
}

type ArmorClass struct {
	Type  string `json:"type"`
	Value int    `json:"value"`
}

type Speed struct {
	Walk   string `json:"walk"`
	Swim   string `json:"swim"`
	Climb  string `json:"climb"`
	Fly    string `json:"fly"`
	Burrow string `json:"burrow"`
}

type Proficiencies struct {
	Value       int `json:"value"`
	Proficiency Api `json:"proficiency"`
}

type Senses struct {
	Blindsight        string `json:"blindsight"`
	Darkvision        string `json:"darkvision"`
	PassivePerception int    `json:"passive_perception"`
}

type SpecialAbilities struct {
	Name   string   `json:"name"`
	Desc   string   `json:"desc"`
	Damage []Damage `json:"damage"`
	Usage  Usage    `json:"usage"`
	DC     DC       `json:"dc"`
}

type Usage struct {
	Type      string        `json:"type"`
	Times     int           `json:"times"`
	RestTypes []interface{} `json:"rest_types"`
}

type Actions struct {
	Name            string   `json:"name"`
	MultiattackType string   `json:"multiattack_type"`
	Desc            string   `json:"desc"`
	AttackBonus     int      `json:"attack_bonus"`
	Damage          []Damage `json:"damage"`
	Action          []Action `json:"actions"`
}

type Action struct {
	ActionName string `json:"action_name"`
	Count      int    `json:"count"`
	Type       string `json:"type"`
}

type LegendaryActions struct {
	Name   string   `json:"name"`
	Desc   string   `json:"desc"`
	DC     DC       `json:"dc"`
	Damage []Damage `json:"damage"`
}

type DC struct {
	DCType      Api    `json:"dc_type"`
	DCValue     int    `json:"dc_value"`
	SuccessType string `json:"success_type"`
}

type Damage struct {
	DamageType Api    `json:"damage_type"`
	DamageDice string `json:"damage_dice"`
}

type Api struct {
	Index string `json:"index"`
	Name  string `json:"name"`
	URL   string `json:"url"`
}

func MonsterData(api string) Data {
	body := dndapi.DndApi(api)

	defaultData := Data{
		Speed: Speed{
			Walk:   "none",
			Swim:   "none",
			Climb:  "none",
			Fly:    "none",
			Burrow: "none",
		},
	}

	var payload Data = defaultData
	err := json.Unmarshal(body, &payload)
	if err != nil {
		log.Fatal("Error with Unmarshal(): ", err)
	}

	return payload
}
