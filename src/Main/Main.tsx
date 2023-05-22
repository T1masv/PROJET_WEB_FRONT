import "./Main.css";

import { Avatar, Input, Modal, useModal } from "@nextui-org/react";
import { SearchIcon } from "../icons/icons";
import Board from "../Board/Board";
import { useState, useEffect } from "react";

function Main(props) {
  const [isHidden, setIsHidden] = useState(true);
  const [tasks, setTasks] = useState<[] | null>();
  const { setVisible, bindings } = useModal();
  const [projects, setProjets] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("http://localhost:3000/api/project/getAll");
      const data = await response.json();
      setProjets(data);
    };
    fetchProjects().catch((error) => console.log(error));
  }, []);

  const handleShowStatus = async (projectId: number) => {
    console.log(projectId);

    const response = await fetch(`http://localhost:3000/api/ticket`);
    try {
      const data = await response.json();
      const filteredData = data.filter(
        (x: { id_projet: number }) => x.id_projet === projectId
      );
      setTasks(filteredData);
      setVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddNewProject = async (
    nom_projet: string,
    description_projet: string,
    date_creation: string,
    id_createur: number,
    progression: number,
    status: string
  ) => {
    const payload = {
      nom_projet,
      description_projet,
      date_creation,
      id_createur,
      progression,
      status,
    };

    const response = await fetch("http://localhost:3000/api/project/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className='main'>
      <div className='head'>
        <div
          className='search'
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Input
            width='50%'
            placeholder='Search'
            color='secondary'
            contentLeft={<SearchIcon width='24' height='24' />}
          />
          <Avatar text='Joe' size='md' />
        </div>
      </div>
      <div className='mainBoard'>
        <Board
          handleShowStatus={handleShowStatus}
          data={projects}
          columns={new Set(projects?.map((x) => x.status))}
        />
        <Modal
          scroll
          fullScreen
          closeButton
          aria-labelledby='modal-title'
          aria-describedby='modal-description'
          {...bindings}
        >
          <Modal.Body>
            <div className='status'>
              <Board
                title='Status'
                data={tasks}
                columns={new Set(tasks?.map((x) => x.status_ticket))}
                handleAddNewProject={handleAddNewProject}
              />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Main;
