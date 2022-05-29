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
  permissions: string;
};

export const PermissionCard = ({ role, permissions }: Props) => {
  const [readSelected, setReadSelected] = useState(permissions);
  const [editSelected, setEditSelected] = useState(permissions);
  const [removeSelected, setRemoveSelected] = useState(permissions);


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
          <PermissionLabel>
            <PermissionCheckbox>
              {permissions.includes('read') ? (
                <Image src={checkedIcon} alt="Ícone de selecionado" />
              ) : (
                <Image src={uncheckedIcon} alt="Ícone de selecionado" />
              )}
            </PermissionCheckbox>
          </PermissionLabel>
        </PermissionItemArea>

        {/* Colaboradores */}
        <PermissionItemArea className="col-2">
          <PermissionLabel>
            <PermissionCheckbox>
              {permissions.includes('write') ? (
                <Image src={checkedIcon} alt="Ícone de selecionado" />
              ) : (
                <Image src={uncheckedIcon} alt="Ícone de selecionado" />
              )}
            </PermissionCheckbox>
          </PermissionLabel>
        </PermissionItemArea>
        {/* Opções */}
        <PermissionItemArea className="col-2">
          <PermissionLabel>
            <PermissionCheckbox>
              {permissions.includes('delete') ? (
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
