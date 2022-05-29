import {
  HeaderItem,
  HeaderItemTitle,
  ListHeader,
} from "./styles";

export const AgentsHeader = () => {
  return (
        <ListHeader className="row">
        <HeaderItem className="main col-3">
          <HeaderItemTitle>Nome Completo</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem className="col-2">
          <HeaderItemTitle>Departamento</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem className="col-2">
          <HeaderItemTitle>Cargo</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem className="col-2">
          <HeaderItemTitle>Unidade</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem className="col-2">
          <HeaderItemTitle>Status</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem className="col-1">
          <HeaderItemTitle></HeaderItemTitle>
        </HeaderItem>
      </ListHeader>
  );
};
