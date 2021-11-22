import { makeAutoObservable } from "mobx";

import {api} from "./api";
import decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';


class AuthStore {
    user = null;
  
    constructor() {
      makeAutoObservable(this);
    }
  
    setUser = async (token) => {
    try {
        await AsyncStorage.setItem("myToken", token);
        this.user = decode(token);
        console.log(this.user);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    } catch (error) {
        console.log(error)
    }
    
    };
  
    signup = async (user, navigation,toast) => {
      try {
        const res = await api.post("/signup", user);
        // localStorage.setItem("myToken", res.data.token);
        // console.log(res.data.token)
        this.setUser(res.data.token);
        navigation.navigate("TripList")
      } catch (error) {
        // alert(error);
        toast.show({
            title:"Try Again!",
            description: "Wrong username/password",
            placement: "top",
            status: "error",
        })
        
      }
    };
  
    signin = async (user,navigation,toast) => {
      try {
        const res = await api.post("/signin", user);
        // localStorage.setItem("myToken", res.data.token);
        this.setUser(res.data.token);
        navigation.replace("TripList")
      } catch (error) {
        // alert(error);
        toast.show({
            title:"Try Again!",
            description: "Wrong username/password",
            placement: "top",
            status: "error",
        })
      }
    };
  
    logOut = async (toast,navigation) => {
        try {
        delete api.defaults.headers.common.Authorization;
        await AsyncStorage.removeItem("myToken");
        this.user = null;
        toast.show({
            title:"Log out",
            description: "log out successfully",
            placement: "top",
            status: "success",
        })
        navigation.replace("Signin")
        
        } catch (error) {
            console.log(error)
        }
      
    };
  
    checkForToken = async () => {
        try{
      this.user = null;
      const token = await AsyncStorage.getItem("myToken");
      if (token) {
        const currentTime = Date.now(); // give us the current time
        let tempUser = decode(token);
        if (tempUser.exp >= currentTime) {
          this.setUser(token);
        } else {
          this.logOut();
        }
      }
    } catch(error){
        console.log(error)
    }
    };

  }
  const authStore = new AuthStore();
  authStore.checkForToken();
  export default authStore;
  