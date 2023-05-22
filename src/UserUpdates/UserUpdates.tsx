import "./UserUpdates.css";
import { useState, useEffect } from 'react';
import { Input, Spacer } from "@nextui-org/react";
import { useParams } from 'react-router-dom';


function UserUpdates() {
  const { id } = useParams();
  const [userData, setUserData] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/users/updateUserById/' + id, {
        method: 'PUT',
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
      });
      const data = await response.json();
      setUserData(data);
      // Réponse
      console.log("Response correcte")

      location.href = "/usermanagement";
    } catch (error) {
      // Gestion des erreurs
      console.log("Erreur " + error);
    }
  };

  const getUserDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/getUsersById/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      setUserData(data);
      setEmail(data.email);
      setNom(data.nom);
      setPrenom(data.prenom);
      setUsername(data.pseudo);
      setPassword(data.mot_de_passe);
      // Réponse
      console.log(data);
    } catch (error) {
      // Gestion des erreurs
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="SignUp">
        <form className="card" onSubmit={handleSubmit}>
            <h1>Update</h1>
            <div className="inputs">
                <Spacer y={0.5} />
                <Input labelPlaceholder="Email" initialValue={email} color="default" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Spacer y={0.5} />
                <Input labelPlaceholder="Nom"color="default" value={nom} onChange={(e) => setNom(e.target.value)}/>                
                <Spacer y={0.5} />
                <Input labelPlaceholder="Prenom" color="default" value={prenom} onChange={(e) => setPrenom(e.target.value)}/>
                <Spacer y={0.5} />
                <Input labelPlaceholder="Pseudo" color="default" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Spacer y={0.5} />
                <Input.Password labelPlaceholder="Mot de passe" color="default" value={password} onChange={(e) => setPassword(e.target.value)}/>                
            </div>
            <input type="submit" className="FormButton" value="Mettre a jour"/>
        </form>
    </div>
  );
};

export default UserUpdates;
