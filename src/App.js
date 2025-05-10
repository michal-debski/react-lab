import './App.css';
import {useState} from "react";
import "milligram"
import LoginForm from "./LoginForm";

function App() {
    const [email, setEmail] = useState(null);
    const [authenticatedUsername, setAuthenticatedUsername] = useState(null);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    return (
        <div className="App">
            <h1>Witaj w systemie do zapisów na zajęcia</h1>
            {!authenticatedUsername && (
                <LoginForm onLogin={login}/>
            )}
            {authenticatedUsername && (
                <div>
                    <h4>Witaj {authenticatedUsername}!</h4>
                    <div>
                        <a onClick={() => setAuthenticatedUsername(null)}>Wyloguj</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
