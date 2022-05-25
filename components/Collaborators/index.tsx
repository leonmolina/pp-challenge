import { useState } from "react"
import { Container, ListArea, ListContent, ListFooter, ListFooterLeftSide, ListFooterRightSide, ListHeader, ListTitle, SearchInput } from "./styles"

export const Collaborators = () => {
  const [search, setSearch] = useState('');
  return (
    <Container>
      {/* Barra de pesquisa dos Colaboradores */}
      <SearchInput
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Pesquise por nome ou cpf"
      />
      <ListTitle>Listagem de colaboradores</ListTitle>
      <ListArea>
        <ListHeader>
          <span>Nome completo</span>
          <span>Departamento</span>
          <span>Cargo</span>
          <span>Unidade</span>
          <span>Status</span>
        </ListHeader>
        
        <ListContent>
          <span>Lista de colaboradores</span>
        </ListContent>

        <ListFooter>
          <ListFooterLeftSide>
          <span>Mostrando 10 de 50 registros</span>
          <select name="select" id="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          </ListFooterLeftSide>
          <ListFooterRightSide>
            <button value="prev">{'<'}</button>
            <span>1 de 10</span>
            <button value="next">{'>'}</button>
          </ListFooterRightSide>
        </ListFooter>
      </ListArea>
    </Container>
  )
}