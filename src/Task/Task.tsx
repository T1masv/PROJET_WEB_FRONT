import { Card, Text, Badge, Progress } from "@nextui-org/react";

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
        <Text b>{props.title}</Text>
        <div className='task__tags'></div>
      </Card.Header>
      <Card.Body>
        <Text>{props.description}</Text>
        {props.progress ? (
          <Progress value={props.progress} color='error' size='sm' />
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
}

export default Task;
