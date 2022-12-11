import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './LoginButton.css'

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        
        !isAuthenticated && (
            <div>
            <h1 class="title">Mood App</h1>
            <button class='LoginButton' onClick={() => loginWithRedirect()}>
                Sign In
            </button>
            </div>
        )
        
    )
}

export default LoginButton