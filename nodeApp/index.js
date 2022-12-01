var express = require('express');
var axios = require('axios');


const app = express();



app.get("/", (req, res, next) => {
    return res.send("Mood App");
});

app.get("/spotify", (req, res, next) => {
    const options = {
        method: 'GET',
        url: 'https://spotify-scraper.p.rapidapi.com/v1/search',
        params: {term: req.query.artist, type: 'artist'},
        headers: {
            'X-RapidAPI-Key': 'b4ae92422fmsha8edf3639f772abp1c6624jsn72eb28e5243c',
            'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
	    let artistID = response.data.artists.items[0].id;
        setTimeout(function () {relatedArtists(artistID)}, 1100);
    }).catch(function (error) {
	    console.error(error);
    });


    function relatedArtists (artist) {

        const options = {
            method: 'GET',
            url: 'https://spotify-scraper.p.rapidapi.com/v1/artist/related',
            params: {artistId: artist},
            headers: {
                'X-RapidAPI-Key': 'b4ae92422fmsha8edf3639f772abp1c6624jsn72eb28e5243c',
                'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
	        return_val = ""
            for (let i = 0; i<10; i++){
                if (i!=9){
                    return_val += (response.data.relatedArtists.items[i].name) + "," + "\n";
                } else {
                    return_val += (response.data.relatedArtists.items[i].name) + "\n";
            }}
            console.log(return_val)
            return res.send(return_val)
            }).catch(function (error) {
                console.error(error);
            });
    }

    function timeout(){
        console.log("Wait");
    }

  });

app.get("/netflix", (req, res, next) => {

    const options = {
        method: 'GET',
        url: 'https://netflix-weekly-top-10.p.rapidapi.com/api/' + req.query.media,
        headers: {
            'X-RapidAPI-Key': 'b4ae92422fmsha8edf3639f772abp1c6624jsn72eb28e5243c',
            'X-RapidAPI-Host': 'netflix-weekly-top-10.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
    return_val = ""
    for (let i = 0; i<10; i++){
        if (i!=9){
            return_val += (response.data[i].name) + "," + "\n";
        } else {
            return_val += (response.data[i].name) + "\n";
        }
        
    }
    console.log(return_val)
    return res.send(return_val);
    
    }).catch(function (error) {
	    console.error(error);
    });

  });

app.get("/event", (req, res, next) => {
    const SerpApi = require('google-search-results-nodejs');
    const search = new SerpApi.GoogleSearch("b682993fcf1120a1979565cd8481ccd12814bea8cec130beeb9c2b7e800f37ae");
  
    const params = {
        device: "desktop",
        engine: "google_events",
        q: req.query.type + " in " + req.query.location,
        google_domain: "google.com",
        hl: "en",
        gl: "us",
        location: req.query.location,
        htichips: "date:today"
    };
  
    const callback = function(data) {
        var json_parsed = data.events_results;
        return_val = ""
        for (let i = 0; i < json_parsed.length; i++) {
            if (i != (json_parsed.length -1)){
                return_val += (json_parsed[i].title) + "," + "\n";
            } else {
                return_val += (json_parsed[i].title) + "\n";
            }
        }
        console.log(return_val)
        return res.send(return_val);
    };
  
    search.json(params, callback);

  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
