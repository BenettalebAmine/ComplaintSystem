import axios from 'axios';

const API_BASED_URL = "http://localhost:8080";

export default function ComplaintService() {

    //for adding a complaint
    const addComplaint = (complaint) => {
        return axios.post(API_BASED_URL + "/addComplaint", complaint);
    }

    //for getting all complaints
    const getComplaints = () => {
        return axios.get(API_BASED_URL + "/getAllComplaints");
    }

}
