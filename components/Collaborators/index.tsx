import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CollaboratorCard } from "../CollaboratorCard";
import {
  Container,
  ListArea,
  ListContent,
  ListFooter,
  ListFooterLeftSide,
  ListFooterRightSide,
  ListHeader,
  ListTitle,
  SearchInput,
} from "./styles";

interface Phone {
  ddd: number;
  ddi: number;
  number: number;
}

interface Document {
  type: string;
  number: number;
}

export interface Agent {
  id: number;
  name: string;
  email: string;
  phone: Phone;
  document: Document;
  birth_date: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
}
export interface Agents {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
}

export const Collaborators = () => {
  const [search, setSearch] = useState("");
  const [agent, setAgent] = useState({});
  const [agents, setAgents] = useState<Agents[]>([]);

  useEffect(() => {
    const getAgents = async () => {
      const res = await api.get("/agents")
      setAgents(res.data.items)
    }
    getAgents();
  }, []);

  return (
    <Container>
      {/* Barra de pesquisa dos Colaboradores */}
      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
          {/* {
          agents?.map((i, k) => (
            <div key={k}>
              <span>{i.name}</span>
            </div>
          ))
          } */}
          {
          agents?.map((i, k) => (
            <div key={k}>
              <CollaboratorCard agents={i} />
            </div>
          ))
          }
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
            <button value="prev">{"<"}</button>
            <span>1 de 10</span>
            <button value="next">{">"}</button>
          </ListFooterRightSide>
        </ListFooter>
      </ListArea>
    </Container>
  );
};
