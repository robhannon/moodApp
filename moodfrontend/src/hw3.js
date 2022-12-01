import { useState } from "react";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Create = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const [location, setLocation] = useState('');
    const [eventType, setEvent] = useState('');
    const [media, setMedia] = useState('');
    const [artist, setArtist] = useState('');
    const [td, setTD] = useState('event');
    let retVal = "";

    const handleSubmit = (l) => {
        l.preventDefault();
        retVal = "change"
        const toDo = { location, eventType, media, artist, td }
        if (toDo.td == "netflix"){
            fetch('http://localhost:8080/netflix?media=' + toDo.media, {
                method: 'GET'
            }).then(response => response.text())
            .then(result => {console.log(result);
                document.getElementById("return").innerHTML = result})
            .catch(error => console.log('error', error));
        } else if (toDo.td == "spotify") {
            fetch('http://localhost:8080/spotify?artist=\"' + toDo.artist + "\"", {
                method: 'GET'
            }).then(response => response.text())
            .then(result => {console.log(result);
                document.getElementById("return").innerHTML = result})
            .catch(error => console.log('error', error));
        } else if (toDo.td == "songs") {
            fetch('http://localhost:8080/spotify?artist=\"' + toDo.artist + "\"", {
                method: 'GET'
            }).then(response => response.text())
            .then(result => {console.log(result);
                document.getElementById("return").innerHTML = result})
            .catch(error => console.log('error', error));
        } else {
            fetch('http://localhost:8080/event?location=' + toDo.location + '&type=' + toDo.eventType, {
                method: 'GET'
            }).then(response => response.text())
            .then(result => {console.log(result);
                document.getElementById("return").innerHTML = result})
            .catch(error => console.log('error', error));
        }
        
    }
    if (isAuthenticated){
    return (
        
        <div className="create">
            <h2>Which Thing To Do?</h2>
            <form>
                <label>Location:</label>
                <input 
                    type="text"
                    required
                    value = {location}
                    onChange = {(l) => setLocation(l.target.value)}
                />
                <label>Event Type:</label>
                <input 
                    type="text"
                    required
                    value = {eventType}
                    onChange = {(l) => setEvent(l.target.value)}
                />
                <label>tv or movies:</label>
                <input 
                    type="text"
                    required
                    value = {media}
                    onChange = {(l) => setMedia(l.target.value)}
                />
                <label>Artist:</label>
                <input 
                    type="text"
                    required
                    value = {artist}
                    onChange = {(l) => setArtist(l.target.value)}
                />
                <label>To Do:</label>
                <select
                value = {td}
                onChange = {(l) => setTD(l.target.value)}>
                    <option value="netflix">Netflix</option>
                    <option value="spotify">Artists</option>
                    <option value="songs">Songs</option>
                    <option value="event">Event</option>
                </select>
                <button onClick= {handleSubmit}>Submit: </button>
                <p id="return">{retVal}</p>
            </form>
        </div>
        
    )
    }
}

export default Create;