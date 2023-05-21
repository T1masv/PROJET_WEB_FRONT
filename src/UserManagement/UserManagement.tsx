import "./UserManagement.css";
import { useState, useEffect } from 'react';
import { Modal, useModal, Card, Text } from "@nextui-org/react";
import UserDetails from "../UserDetails/UserDetails";

const handleMakeAdmin = (id: number) => async (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();

  try {
    const response = await fetch(`http://localhost:3000/api/users/updateToAdmin/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      // Autres options de la requête si nécessaire
    });

    // Gérer la réponse de l'API si nécessaire
    console.log('Make Admin request successful');
  } catch (error) {
    // Gérer les erreurs de l'API
    console.log('Make Admin request failed', error);
  }
};

const handleRemoveFromAdmin = (id: number) => async (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();

  try {
    const response = await fetch(`http://localhost:3000/api/users/removeFromAdmin/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      // Autres options de la requête si nécessaire
    });

    // Gérer la réponse de l'API si nécessaire
    console.log('Remove from Admin request successful');
  } catch (error) {
    // Gérer les erreurs de l'API
    console.log('Remove from Admin request failed', error);
  }
};


const UserManagement = (props: any) => {
    const [userData, setUserData] = useState([]);
    const { setVisible, bindings } = useModal();
    const [selectedUserId, setSelectedUserId] = useState(Number);

  
    const getUsers = async () => {  
      try {
        const response = await fetch('http://localhost:3000/api/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
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
          <div className="details">
            <Modal scroll width="600px" aria-labelledby="modal-title" aria-describedby="modal-description" {...bindings}>
              <Modal.Header>
                <Text id="modal-title" size={18}>
                  Informations detaillées
                </Text>
              </Modal.Header>
              <Modal.Body>
                <UserDetails id={selectedUserId}></UserDetails>
              </Modal.Body>
            </Modal>
          </div>
            {userData.length > 0 ? (
                <div className="grid">
                    {userData.map((user: any) => (
                        <Card isPressable isHoverable variant="bordered" key={user.id_utilisateur} onPress={() => {
                          setSelectedUserId(user.id_utilisateur);
                          setVisible(true);
                        }}>
                            <Card.Body>
                                <Text>{user.nom} {user.prenom}</Text>
                                <a href={`/update/${user.id_utilisateur}`}>Update</a>
                                <a href={`/usermanagement`} onClick={handleMakeAdmin(user.id_utilisateur)}>{user.role === 2 || user.role === null ? "Make Admin" : null}</a>
                                <a href={`/usermanagement`} onClick={handleRemoveFromAdmin(user.id_utilisateur)}>{user.role === 1 ? "Remove from Admin" : null}</a>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            ) : (
                <p>Aucun utilisateur trouvé.</p>
            )}
        </div>
    );
};

export default UserManagement;
