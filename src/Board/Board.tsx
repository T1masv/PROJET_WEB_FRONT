import Projects from "../Projects/Projects";
import "./Board.css";
import TaskColumn from "../TaskColumn/TaskColumn";
import { Card, Text, Badge, useModal } from "@nextui-org/react";

import { useState, useEffect } from "react";
import { PlusCircle } from "react-bootstrap-icons";

function Board(props: any) {
  const setVisible = useModal();
  return (
    <div className='board'>
      <div className='board__head'>
        <h3 className='board__title'>{props.title ?? ""}</h3>
      </div>
      <div className='board__body'>
        {[...props.columns].map((title, index) => (
          <TaskColumn
            key={index}
            title={title ?? "No title"}
            tasks={props.data.filter(
              (x: { status: string | null; status_ticket: string | null }) =>
                (x.status ??= x.status_ticket ??= null) === title
            )}
            handleShowStatus={props.handleShowStatus}
          />
        ))}
        <Card
          isPressable
          variant='bordered'
          className='add_column_btn'
          css={{ width: "fit-content" }}
        >
          <Card.Body css={{ display: "flex" }}>
            <PlusCircle style={{ margin: "auto" }} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Board;
