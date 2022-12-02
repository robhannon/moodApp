import { useState } from "react";
import { choice_event } from "../hw3"
import React from "react";

const Hello = () => {
    //if (choice_event) {
    return (
        
        <div className="Hello">
            <h2>What location are you in?</h2>
            <p>{choice_event}</p>
            <form>
            <button onClick={""}>Submit</button>
            </form>
        </div>
    )
    //}
}
 export default Hello;