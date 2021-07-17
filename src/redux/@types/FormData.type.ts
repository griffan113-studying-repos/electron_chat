import { Register } from "../../api/Auth.service";

export interface FormData extends Register {
  email: string,
  password: string,
}