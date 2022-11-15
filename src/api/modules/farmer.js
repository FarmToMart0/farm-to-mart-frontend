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
  },
  getOngoingMycrops(data){
    return resolver(axiosClient.get(`/farmer/getmycrops/990910820V`))
  },
  getCompletedMycrops(){
    return resolver(axiosClient.get(`/farmer/getcompletedmycrops/990910820V`))
  },
  updateHarvestedData(data){
    
    return resolver(axiosClient.put(`/farmer/updateharvest/${data[1]}`,data[0]))
  },
  getHarvestdetails(ditrict,crop){
    return resolver(axiosClient.get(`/farmer/harvestdetails/${ditrict}/${crop}`))
  },
  getToHarvestedCrops(district,year){
    return resolver(axiosClient.get(`/farmer/topharvestedcrops/${district}/${year}`))
  },
  getCategorySummary(district,year){
   
    return resolver(axiosClient.get(`/farmer/averagecropcategory/${district}/${year}`))
  },
  getCropTypeList(){
    return resolver(axiosClient.get(`/farmer/uniquecrops`))
  },
  getDistrictList(){
    return resolver(axiosClient.get(`/farmer/uniquedistrict`))
  },
  getYearstList(district){
    return resolver(axiosClient.get(`/farmer/uniqueyears/${district}`))
  },
  getReviews(id){
    return resolver(axiosClient.get(`/reviews/${id}`))
  }
  
  
  
};
