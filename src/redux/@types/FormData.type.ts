import { Register } from "../../api/@types/Register.type";

export interface FormData extends Register {
  email: string,
  password: string,
}