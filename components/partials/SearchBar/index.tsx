import { useState } from "react";
import { Container, InputArea, SearchInput, SearchLabel } from "./styles";
import searchIcon from '../../../public/magnifying-glass.svg'
import Image from "next/image";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <Container>
      <SearchLabel>Pesquisar por</SearchLabel>
      <InputArea>
      <Image
      width={24}
      height={24}
      src={searchIcon}
      alt="Ícone de lupa, simbolizando a área de busca."
      />
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquise por nome ou cpf"
        />
      </InputArea>
    </Container>
  );
};
