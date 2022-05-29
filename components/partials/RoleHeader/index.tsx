import { HeaderItem, HeaderItemTitle, ListHeader } from "./styles";

export const RoleHeader = () => {
  return (
    <ListHeader className="row">
      <HeaderItem className="main col-6">
        <HeaderItemTitle>Cargo</HeaderItemTitle>
      </HeaderItem>
      <HeaderItem className="col-2">
        <HeaderItemTitle>Ler</HeaderItemTitle>
      </HeaderItem>
      <HeaderItem className="col-2">
        <HeaderItemTitle>Editar</HeaderItemTitle>
      </HeaderItem>
      <HeaderItem className="col-2">
        <HeaderItemTitle>Excluir</HeaderItemTitle>
      </HeaderItem>
    </ListHeader>
  );
};
