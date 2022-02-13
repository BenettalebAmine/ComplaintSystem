import axios from 'axios';

const API_BASED_URL = "http://localhost:8080";

// export default function ComplaintService() {

    //for adding a complaint
    export const addComplaint = (complaint) => {
        // return axios.post(API_BASED_URL + "/addComplaint", complaint);
        console.log(complaint)
    }

    //for getting all complaints
    export const getComplaints = (id) => {
        // return axios.get(API_BASED_URL + "/getAllComplaints");
        return [
            {
                "complaint": {
                    "complaintCounter": 1,
                    "complaintResolutionCounter": 0,
                    "complaintType": 2,
                    "date": 1644792087216,
                    "latitude": 37.4219983,
                    "longitude": -122.084,
                    "status": false
                },
                "picture": {
                    "data": "ABCDEF",
                    "date": 1644792087217,
                    "deviceId": "643662880403167d",
                    "status": false
                }
            },
            {
                "complaint": {
                    "complaintCounter": 1,
                    "complaintResolutionCounter": 0,
                    "complaintType": 1,
                    "date": 1644792087216,
                    "latitude": 37.4219983,
                    "longitude": -122.084,
                    "status": true
                },
                "picture": {
                    "data": "ABCDEF",
                    "date": 1644792087217,
                    "deviceId": "643662880403167d",
                    "status": true
                }
            },
            {
                "complaint": {
                    "complaintCounter": 1,
                    "complaintResolutionCounter": 0,
                    "complaintType": 0,
                    "date": 1644792087216,
                    "latitude": 37.4219983,
                    "longitude": -122.084,
                    "status": false
                },
                "picture": {
                    "data": "ABCDEF",
                    "date": 1644792087217,
                    "deviceId": "643662880403167d",
                    "status": true
                }
            },
        ]
    }

// }
