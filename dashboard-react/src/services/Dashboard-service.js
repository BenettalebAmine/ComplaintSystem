import axios from 'axios';
const API_URL = "http://localhost:8081"
const picturesCount = () => {
    return axios.get(API_URL+"/getPicturesCount")
}
export default { picturesCount }
  