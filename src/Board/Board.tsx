import "./Board.css";
import TaskColumn from "../TaskColumn/TaskColumn";

import { useState, useEffect } from "react";

function Board(props: any) {
  console.log(
    props.data,
    props.data.map(
      (x: { status: string | null }) => (x.status ??= x.status_ticket)
    )
  );
  return (
    <div className='board'>
      <div className='board__head'>
        <h3 className='board__title'>Projects 💡</h3>
      </div>
      <div className='board__body'>
        {[...props.columns].map((title, index) => (
          <TaskColumn
            key={index}
            title={title ?? "No title"}
            tasks={props.data.filter(
              (x: { status: string }) =>
                (x.status ??= x.status_ticket ??= null) === title
            )}
            handleShowStatus={props.handleShowStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
