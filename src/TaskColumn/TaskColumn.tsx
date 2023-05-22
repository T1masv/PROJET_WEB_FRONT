import "./TaskColumn.css";
import { Card, Text, Badge, useModal } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { PlusCircle } from "react-bootstrap-icons";

import Task from "../Task/Task";
import AddNewProject from "../AddNewProject/AddNewProject";

function TaskColumn(props: {
  title: string;
  tasks?: any[];
  handleShowStatus: Function;
  type?: string;
}) {
  const [visible, setVisible] = useState(false);
  return (
    <Card
      variant='bordered'
      css={{ width: "25%", overflow: "auto", maxHeight: "80vh" }}
      className='task-column'
    >
      <Card.Body>
        <div className='task-column'>
          <div className='task-column__head'>
            <h3>{props.title}</h3>
          </div>
          <div className='task-column__body'>
            {props.tasks?.map((task, index) => (
              <Task
                key={index}
                id={(task.id_projet ??= task.id_ticket)}
                title={(task.nom_projet ??= task.titre_ticket)}
                description={
                  (task.description_projet ??= task.description_ticket)
                }
                progress={task.progression}
                handleShowStatus={props.handleShowStatus}
              />
            ))}
            <Card
              isPressable
              variant='bordered'
              className='add_task_btn'
              onClick={() => setVisible(true)}
            >
              <Card.Body css={{ display: "flex" }}>
                <PlusCircle style={{ margin: "auto" }} />
              </Card.Body>
              <AddNewProject visible={visible} setVisible={setVisible} />
            </Card>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TaskColumn;
