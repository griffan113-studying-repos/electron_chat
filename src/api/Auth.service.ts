import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/db";
import { Chat } from "../redux/@types/Chat.type";

export type Register = {
  email: string,
  password: string,
  username: string,
  avatar: string,
}

type UserProfile = {
  uid: string | undefined,
  username: Register["username"],
  email: Register["email"],
  avatar: Register["avatar"],
  joinedChats?: Array<Chat>
}

export class AuthService {

  /**
   * Register into application
   */

  public async register (registerFields: Register) {
    const { email, password, username, avatar } = registerFields;

    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const { user } = response;
      await this.createUserProfile({
        uid: user?.uid,
        username,
        email,
        avatar,
        joinedChats: []
      })

      return user;

    } catch (error) {
      return Promise.reject(error.message);
    }
  }

  /**
   * Create User profile
   */

  public async createUserProfile (userProfile: UserProfile) {
    return db
      .collection("profiles")
      .doc(userProfile.uid)
      .set(userProfile)
  }
}