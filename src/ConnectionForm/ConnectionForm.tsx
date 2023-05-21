import "./ConnectionForm.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Input, Spacer } from "@nextui-org/react";

const ConnectionForm = (props: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event: any) => {
      event.preventDefault();
  
      try {
        const response = await fetch('http://localhost:3000/api/users/checkAuthentification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            pseudo: username,
            mot_de_passe: password
          }),
          mode: 'cors'
        });
        const data = await response.json();
  
        // Réponse
        console.log(data);
        location.href = "/"
      } catch (error) {
        // Gestion des erreurs
        console.log(error);
      }
    };

  return (
    <div className="ConnectionForm">
        <form className="card" onSubmit={handleSubmit}>
            <h1>Connexion</h1>
            <div className="inputs">
                <Spacer y={0.5} />
                <Input labelPlaceholder="Nom d'utilisateur" color="default" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Spacer y={0.5} />
                <Input.Password labelPlaceholder="Mot de passe"color="default" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>                
                <a href="/signup" className="text-muted">Inscription</a>
            </div>
            <input type="submit" className="FormButton" value="Connexion"/>
        </form>
    </div>
  );
};

export default ConnectionForm;
