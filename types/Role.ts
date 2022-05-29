import { Rules } from "./Rules";

export interface Role {
  name: string;
  department: string;
  grouprules: Rules[];
}