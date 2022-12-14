import { axiosClient, resolver } from '../client';

export default {
  //endpoint calling for userragitration 
  addProduct(data) {
    return resolver(axiosClient.post('/product/add', data));
  },
  getProduct(id){
    return resolver(axiosClient.get(`/product/getproduct/${id}`));
  },
  deleteProduct(id){
    return resolver(axiosClient.get(`/product/${id}`))
  },
  updateProduct(data){
    return resolver(axiosClient.put(`/product/update`,data))
  },
  getOngoingMycrops(data){
    return resolver(axiosClient.get(`/farmer/getmycrops/${data}`))
  },
  getCompletedMycrops(data){
    return resolver(axiosClient.get(`/farmer/getcompletedmycrops/${data}`))
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
  },
  pushNotification(data){
    return resolver(axiosClient.post(`/bidding/notification`,data))
  },
  notify(id){
    return resolver(axiosClient.get(`/farmer/notify/${id}`));
  }
  ,

  
  addFarmerbyGso(data) {
		return resolver(axiosClient.post("/gso/register-farmer", data));
	},
  getOngoingBidding(id){
    return resolver(axiosClient.get(`/product/ongoingbidding/${id}`))
  }
};
