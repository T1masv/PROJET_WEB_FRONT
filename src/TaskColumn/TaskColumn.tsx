import "./TaskColumn.css";
import { Card, Text } from "@nextui-org/react";
import { useState, useEffect } from "react";

function TaskColumn(props: { title: string }) {
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
      isPressable
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
            <Card isPressable isHoverable variant='bordered'>
              <Card.Body>
                <Text>A pressable card.</Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TaskColumn;
