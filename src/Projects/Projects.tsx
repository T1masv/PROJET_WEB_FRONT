import "./Projects.css";
import { Badge, Progress } from "@nextui-org/react";
import { useState, useEffect } from 'react';

function Projects(props : any) {

    const [userData, setUserData] = useState([]);
  
    const getTickets = async () => {  
      try {
        const response = await fetch('http://localhost:3000/api/ticket', {
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
        getTickets();
      }, []);

    const startedProjects = userData.filter((project: any) => project.status_ticket === 'test integration');
    const onGoingProjects = userData.filter((project: any) => project.status_ticket === 'dev in progress');
    const completedProjects = userData.filter((project: any) => project.status_ticket === 'fixed');
  


  return <div className='card'>
    <div className="title">
        <h2>Projects</h2>
    </div>
    <div className="columns">
        <div className="column">
            <h3>Started</h3>
            {startedProjects.map((project: any) => (
                        <div className="card shadow column" key={project.id}>
                            <Badge color="success" variant="bordered">
                                {project.numero_ticket}
                            </Badge>
                            {project.titre_ticket}
                            {project.description_ticket}
                            <Progress value={60} shadow color="success" status="success" />
                        </div>
                    ))}
        </div>
        <div className="column">
            <h3>On Going</h3>
            {onGoingProjects.map((project: any) => (
                        <div className="card shadow column" key={project.id}>
                            <Badge color="success" variant="bordered">
                                {project.numero_ticket}
                            </Badge>
                            {project.titre_ticket}
                            {project.description_ticket}
                            <Progress value={60} shadow color="success" status="success" />
                        </div>
                    ))}
        </div>
        <div className="column">
            <h3>Completed</h3>
            {completedProjects.map((project: any) => (
                        <div className="card shadow column" key={project.id}>
                            <Badge color="success" variant="bordered">
                                {project.numero_ticket}
                            </Badge>
                            {project.titre_ticket}
                            {project.description_ticket}
                            <Progress value={60} shadow color="success" status="success" />
                        </div>
                    ))}
        </div>
    </div>
  </div>;
}

export default Projects;
