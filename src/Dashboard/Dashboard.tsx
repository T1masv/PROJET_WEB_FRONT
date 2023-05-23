import "./Dashboard.css";
import { useState, useEffect } from 'react';
import { Card, Text,Grid } from "@nextui-org/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import SideBar from "../SideBar/SideBar";


ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard(props: any) {
  const [userData, setUserData] = useState<any>(null);
  const [ProjetData, setProjetData] = useState<any>(null);
  const [UserTicketData, setUserTicketData] = useState<any>(null);
  const [UserByProject, setUserByProject] = useState<any>(null);

  const getTicket = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/ticket/countTicketByStatus`, {
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

  const getDataByProjet = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/ticket/countTicketByStatusByProject`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });
      const data = await response.json();
      setProjetData(data);
      // Réponse
      console.log(data);
    } catch (error) {
      // Gestion des erreurs
      console.log(error);
    }
  };

  const getUserData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/countTicketByUser`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });
      const data = await response.json();
      setUserTicketData(data);
      // Réponse
      console.log(data);
    } catch (error) {
      // Gestion des erreurs
      console.log(error);
    }
  };

  const getUserDataByProject = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/project/countUserByProject`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      setUserByProject(data);
      // Réponse
      console.log(data);
    } catch (error) {
      // Gestion des erreurs
      console.log(error);
    }
  };

  useEffect(() => {
    getTicket();
    getDataByProjet();
    getUserData();
    getUserDataByProject();
  }, []);

  if (!userData || !ProjetData || !UserTicketData) {
    return <div>Loading...</div>;
  }

  // Transformation des données
  const chartData = {
    labels: userData.map((data: any) => data.status_ticket),
    datasets: [
      {
        label: '# of Votes',
        data: userData.map((data: any) => data.nombre_tickets),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Transformation des données
  const byProjet = {
    labels: ProjetData.map((data: any) => data.status_ticket),
    datasets: [
      {
        label: '# of Votes',
        data: ProjetData.map((data: any) => data.nombre_tickets),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Transformation des données
  const byUser = {
    labels: UserTicketData.map((data: any) => data.nom),
    datasets: [
      {
        label: '# of Votes',
        data: UserTicketData.map((data: any) => data.Nombre_ticket),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

    // Transformation des données
    const userByProject = {
      labels: UserByProject.map((data: any) => data.id_projet),
      datasets: [
        {
          label: '# of Votes',
          data: UserByProject.map((data: any) => data.nombre_utilisateur),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };



  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="grid">

      
          <Card isPressable isHoverable variant="bordered" >
          <Card.Header>
            <Text b>Nombre de ticket par status</Text>
          </Card.Header>
            <Card.Body>
              <Doughnut data={chartData} />
            </Card.Body>
          </Card>

          <Card isPressable isHoverable variant="bordered" >
          <Card.Header>
            <Text b>Nombre de ticket par status et par projet</Text>
          </Card.Header>
            <Card.Body>
              <Doughnut data={byProjet} />
            </Card.Body>
          </Card>

          <Card isPressable isHoverable variant="bordered" >
          <Card.Header>
            <Text b>Nombre de ticket par utilisateur</Text>
          </Card.Header>
            <Card.Body>
              <Doughnut data={byUser} />
            </Card.Body>
          </Card>

          <Card isPressable isHoverable variant="bordered" >
          <Card.Header>
            <Text b>Nombre d'utilisateur par ticket</Text>
          </Card.Header>
            <Card.Body>
              <Doughnut data={userByProject} />
            </Card.Body>
          </Card>
          </div>
      
    </div>
  );
}

export default Dashboard;