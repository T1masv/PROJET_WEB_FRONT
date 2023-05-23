import "./ClientManagement.css";
import { VerticalDots, Zoom_In, Edit, Admin, NotAdmin } from "../icons/icons";
import { useState, useEffect } from 'react';
import { Modal, useModal, Card, Text, Avatar, Grid, Badge, Button, Popover } from "@nextui-org/react";
import UserDetails from "../UserDetails/UserDetails";
import SideBar from "../SideBar/SideBar";
import { ToastContainer, toast } from 'react-toastify';

const ClientManagement = (props: any) => {
    const [userData, setUserData] = useState([]);
    const { setVisible, bindings } = useModal();
    const [selectedUserId, setSelectedUserId] = useState(Number);
  
    const getUsers = async () => {  
      try {
        const response = await fetch('http://localhost:3000/api/client', {
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
                        <Card isPressable isHoverable variant="bordered" key={user.id_client} >
                          <Card.Body className="inline-flex">
                            <div className="UserInfo">
                              <Text>{user.nom_client}</Text>
                              <Text>{user.email}</Text>
                            </div>
                            <div className="Icons">
                              <a className="link" href={`/updateClient/${user.id_client}`}><span><Edit/></span></a>
                              <span onClick={() => { setSelectedUserId(user.id_client); setVisible(true);} }><Zoom_In/></span>
                            </div>  
                          </Card.Body>
                        </Card>
                      </Grid>
                    ))}
                  </Grid.Container>
                </div>
            ) : (
                <p>Aucun client trouvé.</p>
            )}
        </div>
    );
};

export default ClientManagement;
