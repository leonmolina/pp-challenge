import { PermissionCard } from "../../PermissionCard";


export const PermissionsBoard = () => {
  return (
    <>
      <PermissionCard role={'Pedidos'} />
      <PermissionCard role={'Clientes'} />
      <PermissionCard role={'Marketing'} />
      <PermissionCard role={'Colaboradores'} />
      <PermissionCard role={'Cargos e permissões'} />
      <PermissionCard role={'Catálogo'} />
      <PermissionCard role={'Financeiro'} />
      <PermissionCard role={'Website e Lojas físicas'} />
    </>
  );
}