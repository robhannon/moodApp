import React from "react";

import blue from '../image/blueImage.jpg';
import green from '../image/greenImage.jpg';
import orange from '../image/orangeImage.jpg';
import purple from '../image/purpleImage.jpg';
import red from '../image/redImage.jpg';
import yellow from '../image/yellowImage.jpg';

import './colorDisplay.css'

import { useAuth0 } from "@auth0/auth0-react"

const ResultDisplay = ({ param, decision }) => {
    const {logout, isAuthenticated } = useAuth0();
    if (param === 'purple') {
        return ( isAuthenticated && (
            <div class = "mainPart">
                <h1> We recommend you to {decision} </h1>
                <img src={purple} class = "colorImage" width="600" height="468" />
            </div>
        ))
    }

    if (param === 'red') {
        return( isAuthenticated && (
        <>
            <img src={red}  class = "colorImage" width="600" height="468" />
        </>
        ) )
    }
    if (param === 'blue') {
        return( isAuthenticated && (
        <>
            <img src={blue} class = "colorImage" width="600" height="468" />
        </>
        ) )
    }
    if (param === 'green') {
        return( isAuthenticated && (
        <>
            <img src={green} class = "colorImage" width="600" height="468" />
        </>
        ) )
    }
    if (param === 'orange') {
        return( isAuthenticated && (
        <>
            <img src={orange} class = "colorImage" width="600" height="468" />
        </>
        ) )
    }
    if (param === 'yellow') {
        return( isAuthenticated && (
        <>
            <img src={yellow} class = "colorImage" width="600" height="468" />
        </>
        ) )
    }
}

export default ResultDisplay;