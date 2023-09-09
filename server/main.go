package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	monsterData "github.com/kasualkid12/conjure-animals-randomizer/modules"
)

func main() {

	monster := monsterData.GrabMonster()

	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
	  c.JSON(http.StatusOK, gin.H{
	    "message": monster,
	  })
	})
	r.Run()
}