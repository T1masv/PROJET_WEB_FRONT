import "./ConnectionForm.css";
import { Input, Spacer } from "@nextui-org/react";

const ConnectionForm = (props: any) => {
  return (
    <div className="ConnectionForm">
        <form className="card" action="">
            <h1>Connexion</h1>
            <Input labelPlaceholder="Nom d'utilisateur"/>
            <Input.Password labelPlaceholder="Mot de passe"/>
            <input type="submit" className="FormButton" value="Connexion" />
        </form>
    </div>

  );
};

export default ConnectionForm;
