import axios from 'axios';

const API_BASED_URL = "http://10.0.2.2:8088";


export const addComplaint = (complaint) => {
    return axios.post(API_BASED_URL + "/addComplaint", complaint);
}

export const getComplaints = (id) => {
    return axios.get(API_BASED_URL + "/getComplaintsByDeviceId/" + id);
}

export const resolveComplaint = (id) => {
    return axios.put(API_BASED_URL + "/updateComplaint/" + id)
}

export const resolvePicture = (id) => {
    return axios.put(API_BASED_URL + "/resolvePicture/" + id)
}

