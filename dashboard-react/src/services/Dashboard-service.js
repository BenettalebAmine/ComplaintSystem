import axios from 'axios';
import {API_URL} from '../utils/urls'
const picturesCount = () => {
    return axios.get(API_URL+"/getPicturesCount")
}
const getAllComplaintsLocation= () =>{

    return axios.get(API_URL+"/getAllComplaintsLocation")
}
export  { picturesCount ,getAllComplaintsLocation}
  