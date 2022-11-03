import { axiosClient, resolver } from '../client';

export default {
  //endpoint calling for userragitration 
  addProduct(data) {
    return resolver(axiosClient.post('/product/add', data));
  },
  getProduct(){
    return resolver(axiosClient.get('/product/getproduct'));
  },
  deleteProduct(id){
    return resolver(axiosClient.get(`/product/${id}`))
  },
  updateProduct(data){
    return resolver(axiosClient.put(`/product/update`,data))
  }
  
  
  
};
