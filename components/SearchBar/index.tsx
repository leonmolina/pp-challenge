import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Container, InputArea, SearchInput } from "./styles";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <Container>
      <InputArea>
      <MagnifyingGlass size={32} />
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquise por nome ou cpf"
        />
      </InputArea>
    </Container>
  );
};
