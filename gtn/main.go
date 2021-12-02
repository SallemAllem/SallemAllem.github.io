package main

import (
	. "gt/pkg"
	"log"
	"net/http"
)

func main() {
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("css"))))
	http.HandleFunc("/", MainPage)
	if err := http.ListenAndServe(":8181", nil); err != nil {
		log.Fatal(err)
		return
	}
}
