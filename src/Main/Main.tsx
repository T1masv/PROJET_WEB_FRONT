import "./Main.css";

import { Input, Modal, useModal } from "@nextui-org/react";
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

  return (
    <div className='main'>
      <div className='head'>
        <div className='search'>
          <Input
            width='50%'
            placeholder='Search'
            color='secondary'
            contentLeft={<SearchIcon width='24' height='24' />}
          />
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
          <Modal.Header>
            <h2 id='modal-title'>Status</h2>
          </Modal.Header>
          <Modal.Body>
            <div className='status'>
              <Board
                data={tasks}
                columns={new Set(tasks?.map((x) => x.status_ticket))}
              />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Main;
