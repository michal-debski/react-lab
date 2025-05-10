import './App.css';
import {useState} from "react";


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
                <div>
                    <h2>Zaloguj się e-mailem</h2>
                    <input type="text" value={email} onChange={handleChange}/>
                    <button type="button" onClick={() => setAuthenticatedUsername(email)}>Wchodzę</button>
                </div>
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
