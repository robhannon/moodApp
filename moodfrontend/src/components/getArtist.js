import React from "react";

function ArtistForm(props) {

    return (

        <div id="artist_div">
            <p>{this.props.data.question}</p>
            <form>
                <label>Artist: </label>
                <input type="text" required id="artist" name="artist" onChange = {() => {}}></input>
                <button >Submit: </button>
                </form>
        </div>
        
        
    )
}

export default ArtistForm;