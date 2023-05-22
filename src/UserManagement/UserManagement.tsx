import "./UserManagement.css";
import { VerticalDots, Zoom_In, Edit, Admin, NotAdmin } from "../icons/icons";
import { useState, useEffect } from 'react';
import { Modal, useModal, Card, Text, Avatar, Grid, Badge, Button, Popover } from "@nextui-org/react";
import UserDetails from "../UserDetails/UserDetails";
import SideBar from "../SideBar/SideBar";
import { ToastContainer, toast } from 'react-toastify';

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
    showToastSuccess('L\' utilisateur possède maintenant les droits de developpeur');
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
    showToastSuccess('L\' utilisateur possède maintenant les droits de rapporteur');
    console.log('Remove from Admin request successful');
  } catch (error) {
    // Gérer les erreurs de l'API
    showToastError('Remove from Admin request failed');
    console.log('Remove from Admin request failed', error);
  }
};


const UserManagement = (props: any) => {
    const [userData, setUserData] = useState([]);
    const { setVisible, bindings } = useModal();
    const [selectedUserId, setSelectedUserId] = useState(Number);

    const getInitials = (firstName : string, lastName : string) => {
      const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
      return initials
    }
  
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
        <div className="flex">
          <SideBar></SideBar>
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
                <div className="">
                  <Grid.Container gap={2} >
                    {userData.map((user: any) => (
                      <Grid xs={3}>
                        <Card isPressable isHoverable variant="bordered" key={user.id_utilisateur} >
                          <Card.Body className="inline-flex">
                            <Avatar className="pdp" text={getInitials(user.nom, user.prenom)} size="xl" />
                            <div className="UserInfo">
                              <Text>{user.nom} {user.prenom}</Text>
                              <Text>{user.email}</Text>
                              {user.role === 2 || user.role === null ? (<Badge variant="bordered" color="primary">Rapporteur</Badge>) : null}
                              {user.role === 1 ? (<Badge variant="bordered" color="error">Developpeur</Badge>) : null}
                            </div>
                            <div className="Icons">
                              <a className="link" href={`/update/${user.id_utilisateur}`}><span><Edit/></span></a>
                              <span onClick={() => { setSelectedUserId(user.id_utilisateur); setVisible(true);} }><Zoom_In/></span>
                              
                              {user.role === 2 || user.role === null ? (<span onClick={handleMakeAdmin(user.id_utilisateur)}><Admin/></span>) : null}
                              {user.role === 1 ? (<span onClick={handleRemoveFromAdmin(user.id_utilisateur)}><NotAdmin/></span>) : null}
                            </div>  
                          </Card.Body>
                        </Card>
                      </Grid>
                    ))}
                  </Grid.Container>
                  <ToastContainer />
                </div>
            ) : (
                <p>Aucun utilisateur trouvé.</p>
            )}
        </div>
    );
};

export default UserManagement;
