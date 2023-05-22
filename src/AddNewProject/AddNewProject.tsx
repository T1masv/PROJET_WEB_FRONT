import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { useState } from "react";

import "./AddNewProject.css";

function AddNewProject(props: any) {
  const [nomProjet, setNomProjet] = useState("");
  const [descriptionProjet, setDescriptionProjet] = useState("");
  const [dateCreation, setDateCreation] = useState("");
  const [idCreateur, setIdCreateur] = useState("");
  const [progression, setProgression] = useState("");
  const [status, setStatus] = useState("");

  return (
    <Modal
      closeButton
      blur
      open={props.visible}
      onClose={() => props.setVisible(false)}
    >
      <Modal.Header>
        <Text>Add New Project</Text>
      </Modal.Header>
      <Modal.Body css={{ marginTop: "2rem" }}>
        <Input
          className='input'
          label='Nom projet'
          onKeyDown={(ev) => setNomProjet(ev.target.value)}
        />
        <Input
          className='input'
          label='Description projet'
          onKeyDown={(ev) => setDescriptionProjet(ev.target.value)}
        />
        <Input
          className='input'
          label='Date creation'
          onKeyDown={(ev) => setDateCreation(ev.target.value)}
        />
        <Input
          className='input'
          label='Id createur'
          onKeyDown={(ev) => setIdCreateur(ev.target.value)}
        />
        <Input
          className='input'
          label='Progression'
          onKeyDown={(ev) => setProgression(ev.target.value)}
        />
        <Input
          className='input'
          label='Status'
          onKeyDown={(ev) => setStatus(ev.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color='error' onPress={() => props.setVisible(false)}>
          Close
        </Button>
        <Button
          auto
          onClick={() => {
            props.handleAddNewProject(
              nomProjet,
              descriptionProjet,
              dateCreation,
              idCreateur,
              progression,
              status
            );
          }}
        >
          <Text color='fff'>Add</Text>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddNewProject;
