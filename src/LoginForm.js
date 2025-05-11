import {useState} from "react";

export default function LoginForm(props) {
    const [email, setEmail] = useState('');
    return (
        <div>
        <h2>Zaloguj się e-mailem</h2>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="button" onClick={() => [props.onLogin(email)]}>Wchodzę</button>
    </div>
    );
}