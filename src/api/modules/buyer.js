/* eslint-disable import/no-anonymous-default-export */


import { axiosClient, resolver } from "../client";

export default {
	//endpoint calling for buyer regitration
	signUpBuyer(data) {
		return resolver(axiosClient.post("/buyer/register", data));
	},
	//callingsetting bid values endpoint
	setBidding(data) {
		return resolver(axiosClient.post("bidding/setbid", data));
	},
	//calling getting market products endpoint
	getMarketProducts(data){

		return resolver(axiosClient.get(`product/marketproduct?district=${data[0]}&type=${data[1]}`));
	},

	getItemImages(id){
		return resolver(axiosClient.get(`product/image/${id}`));
	},

	placeOrder(data){
		return resolver(axiosClient.post(`order/placeorder`,data))
	}
};
