package gt

type All struct {
	Id             int      `json:"id"`
	Image          string   `json:"image"`
	Name           string   `json:"name"`
	Members        []string `json:"members"`
	CreationDate   int      `json:"creationDate"`
	FirstAlbum     string   `json:"firstAlbum"`
	Locations      string   `json:"locations"`
	ConcertDates   string   `json:"concertDates"`
	Relations      string   `json:"relations"`
	DatesLocations map[string][]string
}

type City struct {
	Index []Index `json:"index"`
}

type Index struct {
	ID             int64               `json:"id"`
	DatesLocations map[string][]string `json:"datesLocations"`
}

type Coordinate interface{}
