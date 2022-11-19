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
  verify(token){
    return resolver(axiosClient.get(`/signin/verify/${token}`))
  },

  forgotPassword(data){
    return resolver(axiosClient.post(`signin/forgotpassword`,data))
  },
  resetPassword(data){
    return resolver(axiosClient.post(`signin/reset-password`,data))
  },
  checkExpiried(data){
    return resolver(axiosClient.post(`signin/check-expiried`,data))
  },
  
  getFDetails(data){
    return resolver(axiosClient.post('gso/user-details',data))
  },

  getGDetails(data){
    return resolver(axiosClient.post('main-officer/user-details',data))
  }
};
  
