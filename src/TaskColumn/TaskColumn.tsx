import "./TaskColumn.css";
import { Card, Text, Badge } from "@nextui-org/react";
import { useState, useEffect } from "react";

import Task from "../Task/Task";

function TaskColumn(props: {
  title: string;
  tasks?: any[];
  handleShowStatus: Function;
}) {
  const [borderColor, setBorderColor] = useState();

  useEffect(() => {
    const colorsJson = {
      "To Do": "#ef476f",
      "In Progress": "#ffd166",
      Done: "#06d6a0",
    };
    setBorderColor(colorsJson[props.title]);
  }, []);
  return (
    <Card
      isHoverable
      variant='bordered'
      css={{ borderColor: borderColor, width: "30%" }}
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
                handleShowStatus={props.handleShowStatus}
              />
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TaskColumn;
