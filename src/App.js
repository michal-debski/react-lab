import './App.css';
import {useState} from "react";
import "milligram"
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel"

function App() {
    const [loggedIn, setLoggedIn] = useState(null);

    function login(username) {
        if(username){
            setLoggedIn(username);
        }
    }

    function logout() {
            setLoggedIn(null);
    }

    let content;
    if(loggedIn) {
        content = <UserPanel username ={loggedIn} onLogout={logout}/>
    }else{
        content = <LoginForm onLogin={(username) => login(username)}/>
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                loggedIn
                    ? <UserPanel username={loggedIn} onLogout={logout}/>
                    : <LoginForm onLogin={login}/>
            }
        </div>
    );
}

export default App;
