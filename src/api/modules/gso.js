/* eslint-disable import/no-anonymous-default-export */
import { axiosClient, resolver } from "../client";

export default {
	//endpoint calling for gso regitration
	registerGso(data){
		return resolver(axiosClient.post("/main-officer/register-gso", data));
	}
};	
