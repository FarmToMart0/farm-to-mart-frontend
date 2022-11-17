/* eslint-disable import/no-anonymous-default-export */
import { axiosClient, resolver } from '../client';

export default {
  //endpoint calling for userragitration 
  signUpUser(data) {
    return resolver(axiosClient.post('/farmer/register', data));
  },
  signIn(data) {
    
    return resolver(axiosClient.post('/signin', data));
  },
  getDetails(data){
    return resolver(axiosClient.post('user/user-details',data))
  }
  
  
  
};
