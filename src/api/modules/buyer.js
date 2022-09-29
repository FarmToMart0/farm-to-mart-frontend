/* eslint-disable import/no-anonymous-default-export */
import { axiosClient, resolver } from '../client';

export default {
  //endpoint calling for buyer regitration 
  signUpBuyer(data) {
    return resolver(axiosClient.post('/buyer/register', data));
  },
  
};
