import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/db";
import { Register } from "./@types/Register.type";
import { UserProfile } from "./@types/UserProfile.type";

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
   * Create User profile.
   */

  public async createUserProfile (userProfile: UserProfile) {
    return db
      .collection("profiles")
      .doc(userProfile.uid)
      .set(userProfile)
  }

  /**
   * Firebase login listener.
   */

  public onAuthStateChange (onAuth: (user: any) => void) {
    firebase.auth().onAuthStateChanged(onAuth)
  }
}