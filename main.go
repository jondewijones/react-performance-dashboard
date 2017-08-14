package main

import (
	"mime"
	"net/http"
	"os"
	"path/filepath"

	"github.com/ONSdigital/go-ns/log"
	"github.com/ONSdigital/go-ns/server"
	"github.com/gorilla/pat"
	"github.com/jondewijones/react-performance-dashboard/assets"
)

var bindAddr = ":8889"
var getAsset = assets.Asset

func main() {

	router := pat.New()
	router.HandleFunc("/dist/{uri:.*}", staticFiles)
	router.HandleFunc("/{uri:.*}", indexFile)

	s := server.New(bindAddr, router)
	if err := s.ListenAndServe(); err != nil {
		os.Exit(2)
	}

}

func redirectToIndex(w http.ResponseWriter, req *http.Request) {
	http.Redirect(w, req, "/dist/index.html", 301)
}

func indexFile(w http.ResponseWriter, req *http.Request) {
	b, err := getAsset("../dist/index.html")
	if err != nil {
		log.Error(err, nil)
		w.WriteHeader(404)
		return
	}

	w.Header().Set(`Content-Type`, "text/html")
	w.WriteHeader(200)
	w.Write(b)
}

func staticFiles(w http.ResponseWriter, req *http.Request) {
	path := req.URL.Query().Get(":uri")

	b, err := getAsset("../dist/" + path)
	if err != nil {
		log.Error(err, nil)
		w.WriteHeader(404)
		return
	}

	w.Header().Set(`Content-Type`, mime.TypeByExtension(filepath.Ext(path)))
	w.WriteHeader(200)
	w.Write(b)
}
