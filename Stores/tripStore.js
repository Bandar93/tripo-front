import { makeAutoObservable } from "mobx";
import {api} from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";



class TripStore {
    trip = [];
    isLoading = true;

    constructor(){
        makeAutoObservable(this);
    }

    fetchTrip = async () => {
        try {
            const res = await api.get("/trips");
            this.trip = res.data;
            this.isLoading = false;
        } catch (error) {
            console.log(error)
        }
    }
    addTrip = async (trip,navigation,toast) => {
        // this.trip.push(newTrip);
     try {
         const res = await api.post("/trips",trip);
         this.trip.push(res.data)
        //  toast.show({
        //     title:"successfully",
        //     description:"created",
        //     placement:"top",
        //     status:"success!!!!!",
        // })
         navigation.replace("TripList")
         
        } catch (error) {
         console.log(error)
        }
      };

    deleteTrip = async (tripId,navigation) => {

    try {
     await api.delete(`/trips/${trip._id}`),  
    this.trips = this.trips.filter((trip) => trip._id !== tripId);
    navigation.replace("TripList")
   } catch (error) {
       console.log(error)
   }
      };
}

const tripStore = new TripStore();
tripStore.fetchTrip();
export default tripStore;