import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { API_URL } from "../utils/urls";
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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Admin from "../layouts/Admin";

import { Route, Switch } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";
import axios from "axios";
function Pictures(props) {
  const [complaintsPictures, setcomplaintsPictures] = useState([]);
  const location = useLocation();

  const fetchComplaintsPictures = () => {
    fetch(API_URL + "/getComplaintPictures/" + location.state.complaint.id)
      .then((res) => res.json())
      .then((json) => {
        console.log("here..")
        console.log(json)
        console.log("done")
        setcomplaintsPictures(json)
      });
  };
  useEffect(() => {
    fetchComplaintsPictures();
    //  if(complaintsPictures.status)
  }, []);
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const mainPanel = React.useRef(null);
  console.log(complaintsPictures);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

  function handleValid(id) {
    axios
      .put(API_URL + "/UpdatePictureStatus?id=" + id + "&status=true")
      .then((res) => {
        setcomplaintsPictures(
          complaintsPictures.filter((element) => element.id !== id)
        );
      });
  }
  function handleInvalid(id) {
    let res = axios
      .put(API_URL + "/UpdatePictureStatus?id=" + id + "&status=false")
      .then((res) => {
        setcomplaintsPictures(
          complaintsPictures.filter((element) => element.id !== id)
        );
      });
  }
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
            <Container fluid>
              <Row>
                <Col md="12">
                  {Object.values(complaintsPictures).map((picture) => picture.checked?null:(
                    <div>
                      <div>
                        <img
                          className="Pics-compliant"
                          src={"data:image/png;base64," + picture.data}
                        ></img>
                      </div>
                      <div>
                        <button
                          className="Pics-buttons like-button"
                          onClick={() => handleValid(picture.id)}
                        >
                          VALID
                        </button>
                        <button
                          className="Pics-buttons dislike-button"
                          onClick={() => handleInvalid(picture.id)}
                        >
                          NOT VALID
                        </button>
                      </div>
                    </div>
                  ))}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Pictures;
