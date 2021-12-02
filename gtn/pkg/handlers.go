package gt

import (
	"encoding/json"
	"html/template"
	"io/ioutil"
	"net/http"
)

func UnmarshalCity(data []byte) (City, error) {
	var r City
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *City) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

func MainPage(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.Error(w, "404 Page Not Found", http.StatusNotFound)
		return
	}

	all := []All{}
	response1, errr := http.Get("https://groupietrackers.herokuapp.com/api/artists")
	if errr != nil {
		http.Error(w, "500 Internal Server Error", 500)
		return
	}

	responseData1, err2 := ioutil.ReadAll(response1.Body)
	if err2 != nil {
		http.Error(w, "500 Internal Server Error", 500)
		return
	}

	err3 := json.Unmarshal(responseData1, &all)
	if err3 != nil {
		http.Error(w, "500 Internal Server Error", 500)
		return
	}

	cityRes, errC := http.Get("https://groupietrackers.herokuapp.com/api/relation")
	if errC != nil {
		http.Error(w, "500 Internal Server Error", 500)
		return
	}

	responseDataRes, errC2 := ioutil.ReadAll(cityRes.Body)
	if errC2 != nil {
		http.Error(w, "500 Internal Server Error", 500)
		return
	}
	city, _ := UnmarshalCity(responseDataRes)
	for i := 0; i < len(all); i++ {
		all[i].DatesLocations = city.Index[i].DatesLocations
	}
	t := template.Must(template.ParseFiles("templates/index.html"))
	t.Execute(w, all)
}
