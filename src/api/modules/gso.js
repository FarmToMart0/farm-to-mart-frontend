/* eslint-disable import/no-anonymous-default-export */
import AddCropData from "../../components/addCropData";
import { axiosClient, resolver } from "../client";

export default {
	//endpoint calling for gso regitration
	registerGso(data){
		return resolver(axiosClient.post("/main-officer/register-gso", data));
	},

	addCropData(data){
		return resolver(axiosClient.post("/gso/add-crop-details", data));
	},

	checkFarmerAvailability(data){
		return resolver(axiosClient.post("/gso/check-availability-farmer", data));
	},

	checkGsoAvailability(data){
		return resolver(axiosClient.post("/main-officer/check-availability-gso", data));
	},

	removeFarmer(data){
		return resolver(axiosClient.put("gso/remove-farmer", data))
	},

	removeGso(data){
		console.log(data, "gso module")
		return resolver(axiosClient.put("main-officer/remove-gso", data))
	},

	updateGso(data){
		
		return resolver(axiosClient.put("main-officer/edit-gso",data))
	},

	getCropDetails(id){
		return resolver(axiosClient.get(`gso/get-crop-details/${id}`))
	}

};	
