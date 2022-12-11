
import React, {Component} from 'react';
import './decision.css'
import ColorTest from './colorselect';
import LocationForm from './getLocation';
import ArtistForm from './getArtist';
import blue from '../image/blueImage.jpg';
import green from '../image/greenImage.jpg';
import orange from '../image/orangeImage.jpg';
import purple from '../image/purpleImage.jpg';
import red from '../image/redImage.jpg';
import yellow from '../image/yellowImage.jpg';


class DecisionPart1 extends Component {

    constructor(props){
        super(props);
        this.handleLocChange = this.handleLocChange.bind(this);
        this.handleArtistChange = this.handleArtistChange.bind(this);
        this.state = {
            get_songs: false,
            get_artists: false,
            get_spotify: false,
            get_netflix: false,
            get_event: false,
            value: true, 
            question: "Would you rather go in or stay out?", 
            eventType: " ",
            media: " ", 
            location: " ", 
            artist: " ",
            td: " ",
            need_loc: false,
            need_art: false,
            color : " ",
            response: " ",
            most_event: " ",
            colors: []
        }
    }

    handleLocChange(e) {
        e.preventDefault();
        this.setState({location: e.target.value});
    }

    handleArtistChange(e) {
        e.preventDefault();
        this.setState({artist: e.target.value});
      }

    API_submit = () => {
        if (this.state.get_netflix){
            fetch('http://localhost:8080/netflix?media=' + this.state.media, {
                method: 'GET'
            }).then(response => response.text())
            .then(result => {console.log(result);
                document.getElementById("tester").innerHTML = result
                })
            .catch(error => console.log('error', error));
        } else if (this.state.get_spotify) {
            fetch('http://localhost:8080/spotify?artist=' + this.state.artist, {
                method: 'GET'
            }).then(response => response.text())
            .then(result => {console.log(result);
                document.getElementById("tester").innerHTML = result
                })
            .catch(error => console.log('error', error));
        } else if (this.state.get_songs) {
            fetch('http://localhost:8080/topsongs', {
                method: 'GET'
            }).then(response => response.text())
            .then(result => {console.log(result);
                document.getElementById("tester").innerHTML = result
                })
            .catch(error => console.log('error', error));
        } else if (this.state.get_artists) {
            fetch('http://localhost:8080/topartists', {
                method: 'GET'
            }).then(response => response.text())
            .then(result => {console.log(result);
                document.getElementById("tester").innerHTML = result
                })
            .catch(error => console.log('error', error));
            } else if (this.state.get_event){
            fetch('http://localhost:8080/event?location=' + this.state.location + '&type=' + this.state.eventType, {
                method: 'GET'
            }).then(response => response.text())
            .then(result => {console.log(result);
                document.getElementById("tester").innerHTML = result
                })
            .catch(error => console.log('error', error));
        }
        this.setState({value: true, question: "Would you rather go in or stay out?", eventType: " ", media: " ", location: " ", artist: " ",td: " ", response : document.getElementById("tester").value})
        
    }

    handleColorChose = (param) => {
        this.setState({color: param});
        this.state.color = param;
        document.getElementById("colorselect").style.display = "none";
        this.API_submit();
        if (this.state.get_songs || this.state.get_artists || this.state.get_spotify){
            document.getElementById("music").style.display = "block"
            fetch('http://localhost:8888/post?name=Robert&td=music&color=' + param, {
            method: 'POST'
            }).then(response => response.text())
            .then(result => {console.log(result)})
            .catch(error => console.log('error', error));
        } else if (this.state.get_netflix) {
            document.getElementById("watch").style.display = "block"
            fetch('http://localhost:8888/post?name=Robert&td=netflix&color=' + param, {
            method: 'POST'
            }).then(response => response.text())
            .then(result => {console.log(result)})
            .catch(error => console.log('error', error));
        } else {
            document.getElementById("eventTag").style.display = "block"
            fetch('http://localhost:8888/post?name=Robert&td=event&color=' + param, {
            method: 'POST'
            }).then(response => response.text())
            .then(result => {console.log(result)})
            .catch(error => console.log('error', error));
        }
        document.getElementById("color_resp").style.display = "block"
        if (param === "purple"){
            document.getElementById("purple2").style.display = "block"
        } else if (param === "orange") {
            document.getElementById("orange2").style.display = "block"
        } else if (param === "red") {
            document.getElementById("red2").style.display = "block"
        } else if (param === "green"){
            document.getElementById("green2").style.display = "block"
        } else if (param === "yellow") {
            document.getElementById("yellow2").style.display = "block"
        } else {
            document.getElementById("blue2").style.display = "block"
        }
        
    }

    handleHistory = () => {
        document.getElementById("color_resp").style.display = "none";
        document.getElementById("myHistory").style.display = "block";
        let new_most_event = ""
        let new_colors = ""
        fetch('http://localhost:8888/fetch_most_color?name=Robert', {
            method: 'GET'
            }).then(response => response.text())
            .then(result => {console.log(result);
            new_colors = result;
            if(new_colors === 'blue') {
                document.getElementById("blue_hist").style.display = "block";
                document.getElementById("blue_text").style.display = "block";
            } else if (new_colors === 'yellow') {
                document.getElementById("yellow_hist").style.display = "block";
                document.getElementById("yellow_text").style.display = "block";
            } else if (new_colors === 'red'){
                document.getElementById("red_hist").style.display = "block";
                document.getElementById("red_text").style.display = "block";
            } else if (new_colors === 'orange'){
                document.getElementById("orange_hist").style.display = "block";
                document.getElementById("orange_text").style.display = "block";
            } else if (new_colors === 'green'){
                document.getElementById("green_hist").style.display = "block";
                document.getElementById("green_text").style.display = "block";
            } else {
                document.getElementById("purple_hist").style.display = "block";
                document.getElementById("purple_text").style.display = "block";
            };
        })
            .catch(error => console.log('error', error));
        
            fetch('http://localhost:8888/fetch_most_event?name=Robert', {
                method: 'GET'
                }).then(response => response.text())
                .then(result => {console.log(result);
                new_most_event = result;
                if(new_most_event === 'music') {
                    document.getElementById("most_music").style.display = "block";
                } else if (new_most_event === 'netflix') {
                    document.getElementById("most_netflix").style.display = "block";
                } else {
                    document.getElementById("most_event").style.display = "block";
                };
                })
                .catch(error => console.log('error', error));
        this.setState({colors: new_colors, most_event: new_most_event})
        
        
        
        }
    

    handlechoiceChose = (param, question) => {
        if (question == "Would you rather go in or stay out?") {
            if (param) {
                this.setState({value: true, question: "Would you rather watch or listen?"});
                document.getElementById("question").innerHTML = "Would you rather watch or listen?"
                document.getElementById("button1").innerHTML = "Watch"
                document.getElementById("button2").innerHTML = "Listen"
            } else {
                this.setState({td: "event"});
                this.state.get_event = true
                this.setState({value: true, question: "Are you trying to go to an event?"});
                document.getElementById("question").innerHTML = "Are you trying to go to an event?"
                document.getElementById("button1").innerHTML = "Yes"
                document.getElementById("button2").innerHTML = "No"
        }
        }

        if (question == "Would you rather watch or listen?") {
            if (param) {
                this.setState({td: "netflix"})
                this.state.get_netflix = true
                this.setState({value: true, question: "TV Show or Movie?"});
                
                document.getElementById("question").innerHTML = "TV Show or Movie?"
                document.getElementById("button1").innerHTML = "TV Show"
                document.getElementById("button2").innerHTML = "Movie"
            } else {
                this.setState({value: true, question: "Are you looking to get song or artist recommendations?"});
                document.getElementById("question").innerHTML = "Are you looking to get song or artist recommendations?"
                document.getElementById("button1").innerHTML = "Song"
                document.getElementById("button2").innerHTML = "Artist"
        }
        }

        if (question == "TV Show or Movie?") {
            if (param) {
                document.getElementById("dec_tree").style.display = "none";
                this.state.media = "tv"
            } else {
                document.getElementById("dec_tree").style.display = "none";
                this.state.media = "movie"
        }
        }

        if (question == "Are you looking to get song or artist recommendations?") {
            if (param) {
                this.state.get_songs = true;
                document.getElementById("dec_tree").style.display = "none";
                document.getElementById("colorselect").style.display = "block";
                //this.API_submit();
                //document.getElementById("artist_div").style.display = "block";

            } else {
                this.state.get_artists = true
                document.getElementById("dec_tree").style.display = "none";
                document.getElementById("colorselect").style.display = "block";
                //this.API_submit();
                //document.getElementById("artist_div").style.display = "block";
        }
        }

        if (question == "Are you trying to go to an event?") {
            this.setState({td: "event"})
            this.state.get_event = true
            if (param) {
                this.setState({value: true, question: "What type of event are you looking to get tickets for?"});
                document.getElementById("question").innerHTML = "What type of event are you looking to get tickets for?"
                document.getElementById("button1").innerHTML = "Concert"
                document.getElementById("button2").innerHTML = "Sports"
            } else {
                this.setState({value: true, question: "Would you rather go somewhere or just get outside?"});
                document.getElementById("question").innerHTML = "Would you rather go somewhere or just get outside?"
                document.getElementById("button1").innerHTML = "Somewhere"
                document.getElementById("button2").innerHTML = "Outside"
        }
        }

        if (question == "What type of event are you looking to get tickets for?") {
            if (param) {
                this.setState({eventType: "concert"})
                this.state.eventType = "concert"
                document.getElementById("dec_tree").style.display = "none";
                document.getElementById("colorselect").style.display = "block";
                //this.API_submit();
                //document.getElementById("location_div").style.display = "block";
            } else {
                this.setState({eventType: "sporting event"})
                this.state.eventType = "sporting event"
                //document.getElementById("location_div").style.display = "block";
                document.getElementById("dec_tree").style.display = "none";
                document.getElementById("colorselect").style.display = "block";
                //this.API_submit();
        }
        }

        if (question == "Would you rather go somewhere or just get outside?") {
            if (param) {
                this.setState({value: true, question: "Getting food or going out?"});
                document.getElementById("question").innerHTML = "Getting food or going out?"
                document.getElementById("button1").innerHTML = "Resturaunt"
                document.getElementById("button2").innerHTML = "Bar or Club"
            } else {
                document.getElementById("dec_tree").style.display = "none";
                this.setState({eventType: "outside event"})
                this.state.eventType = "outside event"
                document.getElementById("colorselect").style.display = "block";
                //this.API_submit();
                //document.getElementById("location_div").style.display = "block";
        }
        }

        if (question == "Getting food or going out?") {
            if (param) {
                this.setState({eventType: "resturaunt"})
                this.state.eventType = "resturaunt"
                document.getElementById("dec_tree").style.display = "none";
                document.getElementById("colorselect").style.display = "block";
                //this.API_submit();
                //document.getElementById("location_div").style.display = "block";
            } else {
                this.setState({eventType: "nightlife"})
                this.state.eventType = "nightlife"
                document.getElementById("dec_tree").style.display = "none";
                document.getElementById("colorselect").style.display = "block";
                //this.API_submit();
                //document.getElementById("location_div").style.display = "block";
        }
        }
    }

    render() {
        const temp_work = this.state.temperature;
        const artist_work = this.state.artist;
        return (
            
            <div class='container'>
                <div class='column'>
                    
                    <div id="dec_tree" style={{display: 'block'}}>
                    <h2 id="question">Would you rather stay in or go out?</h2>
                    <button class='choice' id='button1' onClick={() => this.handlechoiceChose(true, this.state.question)}>Stay In</button>
                    <button class='choice' id='button2' onClick={() => this.handlechoiceChose(false, this.state.question)}>Go Out</button>                     
                    </div>
                </div>
            <div class = "colorselect" id = "colorselect" style={{display: 'none', marginRight: "33%", width: "3000px"}}>
                <h2 id="question">Select a color for today's activity!</h2>
                    <button id='yellow' class='yellow' onClick={() => this.handleColorChose('yellow')}>‎</button>
                    <button id='orange' class='orange' onClick={() => this.handleColorChose('orange')}>‎</button>
                    <button id='purple' class='purple' onClick={() => this.handleColorChose('purple')}>‎</button>
                    <button id='green' class='green' onClick={() => this.handleColorChose('green')}>‎</button>
                    <button id='red' class='red'onClick={() => this.handleColorChose('red')}>‎</button>
                    <button id='blue' class='blue'onClick={() => this.handleColorChose('blue')}>‎</button>
            </div> 
            <div id="color_resp" style={{display: 'none', position: 'relative'}}>
                <h2 id="music" style={{display: 'none', position: 'absolute', padding: '4px 0', marginLeft: '185px'}}> Today I'll listen to:</h2>
                <h2 id="watch" style={{display: 'none', position: 'absolute', padding: '4px 0', marginLeft: '230px'}}> Today I'll watch:</h2>
                <h2 id="eventTag" style={{display: 'none', position: 'absolute', padding: '4px 0', marginLeft: '215px'}}> Today I'll go to:</h2>
                <p style={{textAlign: 'center', position: 'absolute', marginTop: '175px', fontWeight: 'bold'}} id="tester"></p>
                <img src={purple} style={{display: 'none', backgroundSize: 'cover'}} id="purple2" class = "colorImage" width="800" height="624" />
                <img src={orange} style={{display: 'none', backgroundSize: 'cover'}} id="orange2" class = "colorImage" width="800" height="624" />
                <img src={green} style={{display: 'none', backgroundSize: 'cover'}} id="green2" class = "colorImage" width="800" height="624" />
                <img src={red} style={{display: 'none', backgroundSize: 'cover'}} id="red2" class = "colorImage" width="800" height="624" />
                <img src={yellow} style={{display: 'none', backgroundSize: 'cover'}} id="yellow2" class = "colorImage" width="800" height="624" />
                <img src={blue} style={{display: 'none', backgroundSize: 'cover'}} id="blue2" class = "colorImage" width="800" height="624" />
                <h6 style={{margin: '15px'}}>Screenshot to share with friends!</h6>
                <button id='seeHistory' class='choice' style = {{bottom:"100px", fontSize: "calc(10px + 2vmin)", margin: "15px"}} onClick={() => this.handleHistory()}>See History</button>
            </div>
            <div class = "myHistory" id = "myHistory" style={{display: 'none', marginRight: "33%", width: "3000px"}}>
                <h2 id="historyHeader">My recently wrapped!</h2>
                <h3 id="most_music" style={{display: 'none'}}>You've been listening to a lot of music and feeling ... </h3> 
                <h3 id="most_netflix" style={{display: 'none'}}>You've been watching a lot of netflix and feeling ... </h3> 
                <h3 id="most_event" style={{display: 'none'}}>You've been going to a lot of events and feeling ... </h3>
                <img src={purple} style={{display: 'none', backgroundSize: 'cover', marginLeft: '95px'}} id="purple_hist" class = "colorImage" width="800" height="624" />
                <img src={orange} style={{display: 'none', backgroundSize: 'cover', marginLeft: '95px'}} id="orange_hist" class = "colorImage" width="800" height="624" />
                <img src={green} style={{display: 'none', backgroundSize: 'cover', marginLeft: '95px'}} id="green_hist" class = "colorImage" width="800" height="624" />
                <img src={red} style={{display: 'none', backgroundSize: 'cover', marginLeft: '95px'}} id="red_hist" class = "colorImage" width="800" height="624" />
                <img src={yellow} style={{display: 'none', backgroundSize: 'cover', marginLeft: '95px'}} id="yellow_hist" class = "colorImage" width="800" height="624" />
                <img src={blue} style={{display: 'none', backgroundSize: 'cover', marginLeft: '95px'}} id="blue_hist" class = "colorImage" width="800" height="624" />
                <h5 id="purple_text" style={{display: 'none'}}>anxious! talk it out!</h5> 
                <h5 id="blue_text" style={{display: 'none'}}>sad! we're here for you!</h5> 
                <h5 id="orange_text" style={{display: 'none'}}>pretty good!</h5>
                <h5 id="red_text" style={{display: 'none'}}>angry! chill out!</h5>
                <h5 id="green_text" style={{display: 'none'}}>calm, how we like it</h5>
                <h5 id="yellow_text" style={{display: 'none'}}>joyful!</h5>

            </div> 
            </div>)
                        
    }
}

export default DecisionPart1;
