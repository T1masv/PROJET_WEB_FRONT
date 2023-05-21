import { Card, Text, Badge } from "@nextui-org/react";

function Task(props: any) {
  return (
    <Card
      isPressable
      isHoverable
      variant='bordered'
      className='task'
      onClick={() => {
        props.handleShowStatus(props.id);
      }}
    >
      <Card.Header>
        <Text>{props.title}</Text>
        <div className='task__tags'></div>
      </Card.Header>
      <Card.Body>
        <Text>{props.description}</Text>
      </Card.Body>
    </Card>
  );
}

export default Task;
