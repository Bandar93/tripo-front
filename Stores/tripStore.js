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
    addTrip = async (newTrip) => {
        const foundTrip = this.trips.find((trip) => trip.tripId === newTrip.tripId);
    
        if (foundTrip) {
          foundTrip.quantity += newTrip.quantity;
        } else this.trips.push(newTrip);
        await AsyncStorage.setTrip("myTrip", JSON.stringify(this.trips));
      };

    deleteTrip = async (tripId) => {
      this.trips = this.trips.filter((trip) => tripId !== trip.tripId);
      await AsyncStorage.setTrip("myTrip", JSON.stringify(this.trips));
      };
}

const tripStore = new TripStore();
tripStore.fetchTrip();
export default tripStore;