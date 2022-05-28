import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Container, SearchInput, SearchLabel } from "./styles";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <Container className="form-floating">
      <SearchInput
        className="form-control shadow-none"
        id="floatingInputValue"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquise por nome ou cpf"
      />
      <SearchLabel>Pesquise</SearchLabel>
    </Container>
  );
};
