export interface Agent {
  id: number;
  name: string;
  email: string;
  phone: {
    ddd: string;
    ddi: string;
    number: string;
  };
  document: {
    type: string;
    number: string;
  };
  birth_date: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
}