import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserData = () => {
    const { user, isAuthenticated } = useAuth0();

    if (isAuthenticated){
    return (
        <h2>For {user.nickname}</h2>
    )
    }
}

export default UserData