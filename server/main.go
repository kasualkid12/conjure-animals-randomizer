package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/kasualkid12/conjure-animals-randomizer/modules/grabMonster"
	"github.com/kasualkid12/conjure-animals-randomizer/modules/monsterData"
)

func main() {

	r := gin.Default()

	r.Use(cors.Default())

	r.GET("/", func(c *gin.Context) {
		cr := c.Query("cr")
		monster := grabMonster.GrabMonster(cr)
		data := monsterData.MonsterData(monster)
		c.JSON(http.StatusOK, gin.H{
			"data": data,
		})
	})
	r.Run(":8080")
}
