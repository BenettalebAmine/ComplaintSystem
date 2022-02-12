import React, { useEffect, useState } from "react";
import {useLocation} from "react-router";
import {API_URL} from '../utils/urls';

function Pictures(props){
    const [complaintsPictures , setcomplaintsPictures] = useState([]);
    const location = useLocation();
    
    const fetchComplaintsPictures = () => {
        fetch(API_URL+"/getComplaintPictures/"+location.state.complaint.id)
            .then(res => res.json())
            .then(json => setcomplaintsPictures(json))
    };
    useEffect(() => {
        fetchComplaintsPictures();
    }, []);
    return (
    <>    
                    {
                      Object.values(complaintsPictures).map((pictures) => (
                        <div>
                          <div>
                        <img  src={"data:image/png;base64," + pictures.data}></img></div>
                        <div>
                        <button className="Pics-buttons like-button">
                              VALID
                        </button>
                        <button className="Pics-buttons dislike-button">
                              NOT VALID
                        </button></div></div>
                      ))
                    }
    </>
    )
}

export default Pictures;

  
      