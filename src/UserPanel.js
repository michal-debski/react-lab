import {useState} from "react";

export default function UserPanel({username, onLogout}) {
    return (
        <div>
            <h4>Witaj {username}!</h4>
            <a onClick={() => onLogout()}>Wyloguj</a>
        </div>
    );
}