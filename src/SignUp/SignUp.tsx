import "./SignUp.css";
import { useState } from 'react';
import { Input, Spacer, Card } from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';

const SignUp = (props: any) => {
    const [email, setEmail] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const showToastError = (error : string) => {
      toast.error(error, {
          position: toast.POSITION.TOP_RIGHT
      });
    };

    const showToastSuccess = (message : string) => {
      toast.success(message, {
          position: toast.POSITION.TOP_RIGHT
      });
    };
    const handleSubmit = async (event: any) => {
      event.preventDefault();
  
      try {
        const response = await fetch('http://localhost:3000/api/users/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            nom: nom,
            prenom: prenom,
            pseudo: username,
            mot_de_passe: password,
          }),
          mode: 'cors'
        });
        console.log("yes")
        const data = await response.json();
  
        // Réponse
        console.log("Response correcte")
        showToastSuccess("L'utilisateur a été créé avec succès")

        location.href = "/login";
      } catch (error) {
        showToastError("L'utilisateur n'a pas pu être créé")
        console.log("erreur::: faute a alexis")

        // Gestion des erreurs
        console.log("Erreur " + error);
      }
    };

  return (
    <div className="SignUp">
        <form className="card" onSubmit={handleSubmit}>
          <Card variant="bordered">
            <Card.Body>
            <h1>Inscription</h1>
            <div className="inputs">
                <Spacer y={0.5} />
                <Input labelPlaceholder="Nom"color="default" value={nom} onChange={(e) => setNom(e.target.value)}/>  
                <Spacer y={0.5} />
                <Input labelPlaceholder="Prenom" color="default" value={prenom} onChange={(e) => setPrenom(e.target.value)}/>            
                <Spacer y={0.5} />
                <Input labelPlaceholder="Email" color="default" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Spacer y={0.5} />
                <Input labelPlaceholder="Pseudo" color="default" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Spacer y={0.5} />
                <Input.Password labelPlaceholder="Mot de passe" color="default" value={password} onChange={(e) => setPassword(e.target.value)}/>                
            </div>
            <input type="submit" className="FormButton" value="S'inscire"/>
            </Card.Body>
          </Card>
        </form>
        <ToastContainer />
    </div>
  );
};

export default SignUp;
