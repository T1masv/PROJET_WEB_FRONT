import "./UserDetails.css";
import { useState, useEffect } from 'react';

function UserDetails(props: {id: number}) {
  const [userData, setUserData] = useState<any>(null);

  const getUserDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/getUsersById/${props.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });
      const data = await response.json();
      setUserData(data);
      // Réponse
      console.log(data);
    } catch (error) {
      // Gestion des erreurs
      console.log(error);
    }
  };

  useEffect(() => {
    /*const idFromLocalStorage = localStorage.getItem('userID');
    if (idFromLocalStorage) {
      const id = parseInt(idFromLocalStorage);
      getUserDetails(id);
    }*/
    getUserDetails();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="UserDetails">
      <h1>User Details</h1>
      <p>ID: {userData.id_utilisateur}</p>
      <p>Email: {userData.email}</p>
      <p>Nom: {userData.nom}</p>
      <p>Prénom: {userData.prenom}</p>
      <p>Pseudo: {userData.pseudo}</p>
      <p>Rôle: {userData.role}</p>
    </div>
  );
}

export default UserDetails;