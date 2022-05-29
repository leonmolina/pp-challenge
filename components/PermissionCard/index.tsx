import {
  AgentCheckbox,
  AgentItemArea,
  AgentItems,
  AgentItemText,
  Container,
} from "./styles";
import checkedIcon from '../../public/checkbox-checked.svg';
import uncheckedIcon from '../../public/checkbox-unchecked.svg';
import Image from "next/image";

type Props = {
  role: string;
}

export const PermissionCard = ({role}: Props) => {
  return (
    <Container>
      <AgentItems className="row">
        {/* Cargo */}
        <AgentItemArea className="roleName col-6">
          <AgentItemText>{role}</AgentItemText>
        </AgentItemArea>

        {/* Departamento */}
        <AgentItemArea className="col-2">
          <AgentCheckbox>
            <Image src={checkedIcon} alt="Ícone de selecionado" />
          </AgentCheckbox>
        </AgentItemArea>

        {/* Colaboradores */}
        <AgentItemArea className="col-2">
          <AgentCheckbox>
            <Image src={uncheckedIcon} alt="Ícone de selecionado" />
          </AgentCheckbox>
        </AgentItemArea>

        {/* Opções */}
        <AgentItemArea className="col-2">
        <AgentCheckbox>
          <Image src={checkedIcon} alt="Ícone de selecionado" />
        </AgentCheckbox>
        </AgentItemArea>
      </AgentItems>
    </Container>
  );
};
