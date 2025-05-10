import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    let message = "";
    function handleChange(event) {
        setEmail(event.target.value);
    }

    if (email.length <14 && email.length >5){
        message = "Twój adres e-mail jest w sam raz";
    } else if (email.length >= 14) {
        message = "Twój adres e-mail jest za długi";
    } else {
        message = "Ale masz krótki adres!";
    }

  return (
    <div className="App">
     <h1>System do zapisywania na zajęcia</h1>
        <h2>{message}</h2>
        <h2>Twój e-mail to {email}</h2>
        <input type="text"  value={email} onChange={handleChange}/>
    </div>
  );
}

export default App;
