import { useState } from "react";
import { Collaborators } from "../Collaborators";
import { Roles } from "../Roles";
import { Container } from "./styles";

export const Dashboard = () => {
  const [tabSelected, setTabSelected] = useState(true);
  return (
    <Container className="container">
      <h3>Colaboradores | Cargos</h3>
      {tabSelected
        ?
        <Collaborators />
        : <Roles />
      }
    </Container>
  );
};
