import { makeAutoObservable } from "mobx";
import {api} from "./api";


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
}

const tripStore = new TripStore();
tripStore.fetchTrip();
export default tripStore;