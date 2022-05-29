import { Rules } from "../../types/Rules";
import { PermissionCard } from "../PermissionCard";

type Props = {
  permissions: Rules[];
}

export const PermissionsBoard = ({permissions}: Props) => {
  return (
    <>
      {permissions.map((i, k) => (
        <PermissionCard key={k} role={i.role} permissions={i.permissions} />
      ))}
    </>
  );
}