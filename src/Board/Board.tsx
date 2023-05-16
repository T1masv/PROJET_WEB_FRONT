import "./Board.css";
import TaskColumn from "../TaskColumn/TaskColumn";

function Board(props) {
  return (
    <div className='board'>
      <div className='board__head'>
        <h3 className='board__title'>Projects 💡</h3>
      </div>
      <div className='board__body'>
        {["To Do", "In Progress", "Done"].map((title, index) => (
          <TaskColumn key={index} title={title} />
        ))}
      </div>
    </div>
  );
}

export default Board;
