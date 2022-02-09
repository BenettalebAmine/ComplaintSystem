import axios from 'axios';
import {picturesCount_API_URL} from '../utils/urls'
const picturesCount = () => {
    return axios.get(picturesCount_API_URL+"/getPicturesCount")
}
export default { picturesCount }
  