import "./ClientDetails.css";
import { useState, useEffect } from 'react';

function ClientDetails(props: {id: number}) {
  const [userData, setUserData] = useState<any>(null);

  const getUserDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/client/getClientById/${props.id}`, {
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
      <p>Nom client: {userData.nom_client}</p>
      <p>Email: {userData.email}</p>
      <p>Site: {userData.site}</p>
      <p>Adresse: {userData.adresse}</p>
      
    </div>
  );
}

export default ClientDetails;