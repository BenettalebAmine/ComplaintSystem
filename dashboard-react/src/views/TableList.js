import React, {  useEffect, useState } from "react";
import {useHistory} from "react-router";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import {API_URL} from '../utils/urls'

function TableList() {
  const history = useHistory();
  const [complaints, setcomplaints] = useState([]);
  const fetchComplaints = () => {
        fetch(API_URL+"/getAllComplaints")
            .then(res => res.json())
            .then(json => setcomplaints(json));
    };

    
  useEffect(() => {
        fetchComplaints();
    }, []);
    Object.values(complaints).map((complaint) => {
      complaint.status  ? complaint.status="VALID" : complaint.status="NOT VALID";
    });
    function fetchComplaintsPictures(complaint){
      history.push({
        pathname: "/complaint/pictures",
        state: {
          complaint: complaint,
        },
    })
    }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">ALL COMPLAINTS</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" id="complaints-table">
                  <thead>
                    <tr>
                      <th className="border-0">Complaint details</th>
                      <th className="border-0">Type</th>
                      <th className="border-0">Date</th>
                      <th className="border-0">Validity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        
                      Object.values(complaints).map((complaint) => (  
                        <tr  onClick={() => {fetchComplaintsPictures(complaint)}} key={complaint.id}>
                          <td>{complaint.complaintType + " IN [ "+ complaint.latitude+", "+complaint.longitude+" ]" }</td>
                          <td>{complaint.complaintType}</td>
                          <td>{complaint.date}</td>
                          <td>{complaint.status}</td>
                    </tr>
                      ))
                    }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
