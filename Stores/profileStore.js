import { makeAutoObservable } from "mobx";
import {api} from "./api";


class ProfileStore {

    profile = null;


    constructor(){
        makeAutoObservable(this);
    }

    fetchProfile = async () => {
      try {
        const res = await api.get("/profile");
        this.profile = res.data;
      } catch (error) {
        console.log(error);
      }


    profileUpdate = async (profileUpdate) => {
        try {
          const res = await api.put(`/profile/${profileUpdate._id}`, profileUpdate);
           this.profile = res.data
        } catch (error) {
          console.log(error);
        }
      };


}
}

const profileStore = new ProfileStore();
profileStore.fetchProfile();
export default profileStore