/* eslint-disable import/no-anonymous-default-export */
import { axiosClient, resolver } from '../client';

export default {
  //endpoint calling for userragitration 
  getPlacedOrder(id) {
   
    return resolver(axiosClient.get(`/order/getplaceorders/${id}`));
  },
  getDeliveredOrder(id){
    return resolver(axiosClient.get(`/order/getdeliveredorders/${id}`))
  },
  getRejectedOrder(id){
    return resolver(axiosClient.get(`/order/getrejectedorders/${id}`))
  }
  
  
  
};
