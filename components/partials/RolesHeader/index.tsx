import { HeaderItem, HeaderItemTitle, ListHeader } from "./styles";

export const RolesHeader = () => {
  return (
    <ListHeader className="row">
      <HeaderItem className="main col-2">
        <HeaderItemTitle>Cargo</HeaderItemTitle>
      </HeaderItem>
      <HeaderItem className="col-2">
        <HeaderItemTitle>Departamento</HeaderItemTitle>
      </HeaderItem>
      <HeaderItem className="col-2">
        <HeaderItemTitle>Colaboradores</HeaderItemTitle>
      </HeaderItem>
      <HeaderItem className="col-6">
        <HeaderItemTitle></HeaderItemTitle>
      </HeaderItem>
    </ListHeader>
  );
};
