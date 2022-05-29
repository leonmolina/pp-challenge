import { Rules } from "./Rules";

export interface Role {
  name: string;
  departament: string;
  grouprules: Rules[];
}