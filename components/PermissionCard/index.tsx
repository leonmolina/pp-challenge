import {
  Container,
  PermissionCheckbox,
  PermissionItemArea,
  PermissionItems,
  PermissionItemText,
  PermissionLabel,
} from "./styles";
import checkedIcon from "../../public/checkbox-checked.svg";
import uncheckedIcon from "../../public/checkbox-unchecked.svg";
import Image from "next/image";
import { useState } from "react";

type Props = {
  role: string;
  permissions: {
    read: boolean,
    edit: boolean,
    remove: boolean
  }
};

export const PermissionCard = ({ role, permissions }: Props) => {
  const [readSelected, setReadSelected] = useState(permissions.read);
  const [editSelected, setEditSelected] = useState(permissions.edit);
  const [removeSelected, setRemoveSelected] = useState(permissions.remove);

  return (
    <Container>
      <PermissionItems
        className="row btn-group"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        {/* Cargo */}
        <PermissionItemArea className="roleName col-6">
          <PermissionItemText>{role}</PermissionItemText>
        </PermissionItemArea>

        {/* Departamento */}
        <PermissionItemArea className="col-2">
          <input type="checkbox" className="btn-check" id="btncheck1" />
          <PermissionLabel onClick={() => setReadSelected(!readSelected)}>
            <PermissionCheckbox>
              {readSelected ? (
                <Image src={checkedIcon} alt="Ícone de selecionado" />
              ) : (
                <Image src={uncheckedIcon} alt="Ícone de selecionado" />
              )}
            </PermissionCheckbox>
          </PermissionLabel>
        </PermissionItemArea>

        {/* Colaboradores */}
        <PermissionItemArea className="col-2">
          <input type="checkbox" className="btn-check" id="btncheck2" />
          <PermissionLabel onClick={() => setEditSelected(!editSelected)}>
            <PermissionCheckbox>
              {editSelected ? (
                <Image src={checkedIcon} alt="Ícone de selecionado" />
              ) : (
                <Image src={uncheckedIcon} alt="Ícone de selecionado" />
              )}
            </PermissionCheckbox>
          </PermissionLabel>
        </PermissionItemArea>

        {/* Opções */}
        <PermissionItemArea className="col-2">
          <input type="checkbox" className="btn-check" id="btncheck3" />
          <PermissionLabel onClick={() => setRemoveSelected(!removeSelected)}>
            <PermissionCheckbox>
              {removeSelected ? (
                <Image src={checkedIcon} alt="Ícone de selecionado" />
              ) : (
                <Image src={uncheckedIcon} alt="Ícone de selecionado" />
              )}
            </PermissionCheckbox>
          </PermissionLabel>
        </PermissionItemArea>
      </PermissionItems>
    </Container>
  );
};
