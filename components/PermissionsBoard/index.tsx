import { PermissionCard } from "../PermissionCard";


export const PermissionsBoard = () => {
  return (
    <>
      <PermissionCard role={'Pedidos'} permissions={{read: true, edit: false, remove: false}} />

      <PermissionCard role={'Clientes'} permissions={{read: true, edit: false, remove: true}} />

      <PermissionCard role={'Marketing'} permissions={{read: true, edit: true, remove: true}} />

      <PermissionCard role={'Colaboradores'} permissions={{read: true, edit: false, remove: true}} />

      <PermissionCard role={'Cargos e permissões'} permissions={{read: true, edit: true, remove: false}} />

      <PermissionCard role={'Catálogo'} permissions={{read: true, edit: false, remove: false}} />

      <PermissionCard role={'Financeiro'} permissions={{read: true, edit: true, remove: false}} />

      <PermissionCard role={'Website e Lojas físicas'} permissions={{read: true, edit: false, remove: true}} />

    </>
  );
}