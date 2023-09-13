package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kasualkid12/conjure-animals-randomizer/modules/grabMonster"
)

func main() {

	monster := grabMonster.GrabMonster("Cr0_25")

	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
	  c.JSON(http.StatusOK, gin.H{
	    "message": monster,
	  })
	})
	r.Run()
}