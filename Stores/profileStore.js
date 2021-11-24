import { makeAutoObservable } from "mobx";
import { api } from "./api";

class ProfileStore {
  profile = null;

  constructor() {
    makeAutoObservable(this);
  }

  profileUpdate = async (profileUpdate) => {
    try {
      const res = await api.put("/profile", profileUpdate);
      this.profile = res.data;
    } catch (error) {
      console.log(error);
    }
  };
}

// REVIEW: It should be new ProfileStore()
const profileStore = new ProfileStore();
export default profileStore;
