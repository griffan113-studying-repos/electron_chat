import { Chat } from "../../redux/@types/Chat.type";
import { Register } from "./Register.type";

export type UserProfile = {
  uid: string | undefined,
  username: Register["username"],
  email: Register["email"],
  avatar: Register["avatar"],
  joinedChats?: Array<Chat>
}