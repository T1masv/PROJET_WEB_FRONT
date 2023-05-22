import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { useState } from "react";

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
      <Modal.Body>
        <Input
          labelPlaceholder='Nom projet'
          onMouseDown={(ev) => setNomProjet(ev.target.value)}
        />
        <Input
          labelPlaceholder='Description projet'
          onMouseDown={(ev) => setDescriptionProjet(ev.target.value)}
        />
        <Input
          labelPlaceholder='Date creation'
          onMouseDown={(ev) => setDateCreation(ev.target.value)}
        />
        <Input
          labelPlaceholder='Id createur'
          onMouseDown={(ev) => setIdCreateur(ev.target.value)}
        />
        <Input
          labelPlaceholder='Progression'
          onMouseDown={(ev) => setProgression(ev.target.value)}
        />
        <Input
          labelPlaceholder='Status'
          onMouseDown={(ev) => setStatus(ev.target.value)}
        />
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
        />
      </Modal.Body>
    </Modal>
  );
}

export default AddNewProject;
