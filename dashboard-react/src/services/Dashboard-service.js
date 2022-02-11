import axios from 'axios';
import {API_URL} from '../utils/urls'



const picturesCount = () => {
    return axios.get(API_URL+"/getPicturesCount")
}
const getAllComplaintsLocation= () =>{

    return axios.get(API_URL+"/getAllComplaintsLocation")
}

const signInAdmin=(credentials) =>{

    return axios.post(API_URL+"/signIn?email="+credentials.email+"&password="+credentials.password)
}
export  { signInAdmin, picturesCount ,getAllComplaintsLocation}
  