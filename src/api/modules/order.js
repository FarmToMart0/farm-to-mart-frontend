/* eslint-disable import/no-anonymous-default-export */
import { axiosClient, resolver } from "../client";

export default {
  //endpoint calling for userragitration
  getPlacedOrder(id) {
    return resolver(axiosClient.get(`/order/getplaceorders/${id}`));
  },
  getDeliveredOrder(id) {
    return resolver(axiosClient.get(`/order/getdeliveredorders/${id}`));
  },
  getRejectedOrder(id) {
    return resolver(axiosClient.get(`/order/getrejectedorders/${id}`));
  },
  markAsPaid(id) {
    return resolver(axiosClient.get(`/order/markaspaid/${id}`));
  },
  markAsDelivered(id) {
    return resolver(axiosClient.get(`/order/markasdelivered/${id}`));
  },
  markAsRejected(id) {
    return resolver(axiosClient.get(`/order/markasrejected/${id}`));
  },
  unDoRejectedOrder(id) {
    return resolver(axiosClient.get(`/order/undorejectedorder/${id}`));
  },
  getTotalSales(id) {
    return resolver(axiosClient.get(`/order/totalsales/${id}`));
  },
  getTotalSalesSinceLastMonth(id) {
    return resolver(axiosClient.get(`/order/totalsalesinlastmonth/${id}`));
  },
  getTotalOrders(id) {
    return resolver(axiosClient.get(`/order/totalorderscount/${id}`));
  },
  getTotalOrdersSinceLastMonth(id) {
    return resolver(
      axiosClient.get(`/order/totalorderscountsincelastmonth/${id}`)
    );
  },
  getTotalPendingOrdersCount(id) {
    return resolver(axiosClient.get(`/order/totalpendingordercount/${id}`));
  },
  getSalesOverviwes(id) {
    return resolver(axiosClient.get(`/order/salseOverview/${id}`));
  },
  getOngoingBiddingCount(id) {
    return resolver(axiosClient.get(`/product/ongoingbiddingcount/${id}`));
  },
  getOrderOrverView(id) {
    return resolver(axiosClient.get(`/order/ordersoverview/${id}`));
  },
  placeOrder(data){
		return resolver(axiosClient.post(`/order/placeorder`,data))
	},

	updateProduct(data){
    console.log(data);
    console.log("===============");
		return resolver(axiosClient.put(`/order/updatestatus`,data))
	},

  getOrderByBuyer(buyer){
    return resolver(axiosClient.get(`/order/getordersbybuyer?buyer=${buyer}`))
  },

  addReviews(data){
    console.log(data);
    return resolver(axiosClient.post(`/reviews/addreview`,data))
  },

  updateRemainCrop(data){
    return resolver(axiosClient.put(`/order/updateproduct`,data))
  }
}