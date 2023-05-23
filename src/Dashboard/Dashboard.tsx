import "./Dashboard.css";
import { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard(props: any) {
  const [userData, setUserData] = useState<any>(null);

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

  useEffect(() => {
    getTicket();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: Object.keys(userData?.status_ticket || {}),
    datasets: [
      {
        label: '# of Votes',
        data: Object.values(userData?.nombre_tickets || {}),
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
    <div className="UserDetails">
      <Doughnut data={chartData} />
    </div>
  );
}

export default Dashboard;