import axios from 'axios';
import { HOST_URL,TOKEN_KEY } from '../constants/index';
const resolve_accessToken = () => localStorage.getItem(TOKEN_KEY) || '';

export const axiosClient = axios.create({
  baseURL: HOST_URL,
});

axiosClient.interceptors.request.use(function (config) {
  config.headers.Authorization = resolve_accessToken();
  return config;
});

/**
 * Axios Response Resolver
 * will do error handling part
 * @returns [number, {*}]
 *           status_code will be http response codes
 */
export async function resolver(axiosResponse) {
  try {
    const response = await axiosResponse;
    console.log('data',response.data)
    return [response.data.statusCode, response.data.data];
  } catch (e) {
    const response = e.response;
    return [408 , 'connectiion error' ];
  }
}
