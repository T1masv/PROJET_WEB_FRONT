import "./UserManagement.css";
import { useState, useEffect } from 'react';

const UserManagement = (props: any) => {
    const [userData, setUserData] = useState([]);
  
    const getUsers = async () => {  
      try {
        const response = await fetch('http://localhost:3000/api/users', {
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
        getUsers();
      }, []);

  return (
    <div>
        {userData.length > 0 ? (
          <ul>
            {userData.map((user: any) => (
              <li key={user.id_utilisateur}>
                <p>ID: {user.id_utilisateur}</p>
                <p>Nom: {user.nom}</p>
                <p>Prénom: {user.prenom}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun utilisateur trouvé.</p>
        )}
    </div>
  );
};

export default UserManagement;
