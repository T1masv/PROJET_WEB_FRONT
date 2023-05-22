import "./ConnectionForm.css";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Spacer } from "@nextui-org/react";
import { Card } from "@nextui-org/react";


const ConnectionForm = (props: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSuccessfulLogin = (id: string) => {
      localStorage.setItem('userID', id);
      location.href = "/";
    };

    const showToastError = (error : string) => {
      toast.error(error, {
          position: toast.POSITION.TOP_RIGHT
      });
    };

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
        });
    
        if (!response.ok) {
          const responseData = await response.json(); // Capturer le corps de la réponse
          throw new Error(responseData.error); 
        }     
        const data = await response.json();
    
        // Réponse
      if (data && data.id_Utilisateur) {
        handleSuccessfulLogin(data.id_Utilisateur);
      } else {
        throw new Error("ID utilisateur manquant dans la réponse.");
      }
        // 
      } catch (error) {
        if (typeof error === "object" && error !== null && "message" in error) {
          showToastError((error as { message: string }).message);
        } else {
          showToastError("Une erreur s'est produite.");
        }
      }
    };

  return (
    <div className="ConnectionForm">
        <form className="card" onSubmit={handleSubmit}>
        <Card variant="bordered">
          <Card.Body>
            <h1>Connexion</h1>
            <div className="inputs">
                <Spacer y={0.5} />
                <Input labelPlaceholder="Nom d'utilisateur" color="default" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Spacer y={0.5} />
                <Input.Password labelPlaceholder="Mot de passe"color="default" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>                
                <a href="/signup" className="text-muted">Inscription</a>
            </div>
            <input type="submit" className="FormButton" value="Connexion"/>          
          </Card.Body>
        </Card>

        </form>
        <ToastContainer />
    </div>
  );
};

export default ConnectionForm;
