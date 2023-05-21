import "./Status.css";

function Status(props: any) {
  console.log(props.status);
  return (
    <div className='status'>
      <div className='status__header'>
        <h3> {props.status.projects[0].nom_projet} </h3>
      </div>
      <div className='status__body'></div>
    </div>
  );
}

export default Status;
