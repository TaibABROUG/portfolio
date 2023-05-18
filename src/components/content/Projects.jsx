import Carousel from 'react-bootstrap/Carousel';
import {Col, Row} from "react-bootstrap";
import Box from "../common/Box";
import logoMazars from "../../assets/logoMazars.png";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";

function Projects() {
    return (
        <Row id={"project"} className={"mb-3"}>
            <Col xs={12}>
                <Flip left>
                <h2>Projects</h2>
                </Flip>
            </Col>
            <Col xs={12}>
              <Bounce left>
                  <Carousel interval={30000} variant="dark" >
                      <Carousel.Item>
                          <Col xs={12}>

                              <Row className={"px-md-5 justify-content-center mb-4"}>
                                  <Col style={{maxWidth:700}}>
                                      <Box>   <Row >
                                          <Col xs={12}>
                                              <Row className={"align-items-center"} >
                                                  <Col xs={"auto"}>
                                                      <Row>
                                                          <Col xs={12}>
                                                              <h4  className={"project-company"}>Mazars</h4>
                                                          </Col>
                                                          <Col xs={12}>
                                                              <h6  className={"exp-pos"}>Full stack JS developer</h6>
                                                          </Col>
                                                      </Row>
                                                  </Col>

                                              </Row>

                                          </Col>
                                          <Col xs={12}>
                                              <span className={"exp-date"}>5 month</span>
                                          </Col>
                                          <Col xs={12} className={"pt-3"}>
                                              <h4>Project: Prerating</h4>
                                              <p>
                                                  Development of a web application for employee evaluation this system divided into 3 parts (administrator, evaluator and evaluated)
                                              </p>
                                              <ul>
                                                  <li><i className="fa fa-circle"></i>Analysis of needs and drafting of technical and functional specifications
                                                  </li>
                                                  <li><i className="fa fa-circle"></i>participate in the daily meetings
                                                  </li>
                                                  <li>
                                                      <i className="fa fa-circle"></i>Développement de la partie
                                                      front-end avec ReactJs/NextJs
                                                      <ul className="mh-client-item-sublist">
                                                          <li><i className="fa fa-square-o"></i>Creation of the project architecture with next js
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>Implementing User Authentication with Nextauth/Jwt
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>Set up a campaign management module
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>Set up a feedback management system
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>Set up a rating management system
                                                          </li>
                                                      </ul>
                                                  </li>
                                              </ul>
                                              <div className="mt-1">
                                                  Technologies used:
                                                  <ul className="mh-client-item-sublist">
                                                      <li><i className="fa fa-square-o"></i>Front-end : ReactJs,
                                                          NextJs, Bootstrap, CSS, NextJs
                                                      </li>
                                                      <li><i className="fa fa-square-o"></i>Back-end : .netcore,
                                                          Sql
                                                      </li>
                                                      <li><i className="fa fa-square-o"></i>Outils : Jira,
                                                          webstorm, GIT, bitbucket
                                                      </li>
                                                  </ul>
                                              </div>
                                          </Col>


                                      </Row>
                                      </Box>
                                  </Col>

                              </Row>

                          </Col>

                      </Carousel.Item>
                      <Carousel.Item>
                          <Col xs={12}>

                              <Row className={"px-md-5 justify-content-center mb-4"}>
                                  <Col style={{maxWidth:700}}>
                                      <Box>   <Row >
                                          <Col xs={12}>
                                              <Row className={"align-items-center"} >
                                                  <Col xs={"auto"}>
                                                      <Row>
                                                          <Col xs={12}>
                                                              <h4 className={"project-company"}>Acoba</h4>
                                                          </Col>
                                                          <Col xs={12}>
                                                              <h6  className={"exp-pos"}>FULLSTACK software enginee</h6>
                                                          </Col>
                                                      </Row>
                                                  </Col>

                                              </Row>

                                          </Col>
                                          <Col xs={12}>
                                              <span className={"exp-date"}>12 month</span>
                                          </Col>
                                          <Col xs={12} className={"pt-3"}>
                                              <h4>Project: V.M.S</h4>
                                              <p>
                                                  Development web application for a video management system (VMS) for end user so he can visualize his cameras stream and list of events saved in the cloud
                                              </p>
                                              <ul>
                                                  <li><i className="fa fa-circle"></i>Analysis of needs and drafting of technical and functional specifications
                                                  </li>
                                                  <li><i className="fa fa-circle"></i>participate in the daily meetings
                                                  </li>
                                                  <li>
                                                      <i className="fa fa-circle"></i>Development of the Backend part using NodeJs
                                                      <ul className="mh-client-item-sublist">
                                                          <li><i className="fa fa-square-o"></i>Creation of the project architecture with NodeJS
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>generating classes from an existing SQL database schema using "sequelize"
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>Add caching system using Redis server
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>Create Rest APIs using expressJs
                                                          </li>
                                                      </ul>
                                                  </li>
                                                  <li>
                                                      <i className="fa fa-circle"></i>Development of the frontend part using ReactJs
                                                      <ul className="mh-client-item-sublist">
                                                          <li><i className="fa fa-square-o"></i>Creation of the project architecture with React js
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>Implementing User Authentication with Jwt
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>Development of the user interfaces using Material UI
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>Consumption and integration of data flows from a rest API
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>Set up a translate system using react-i18n
                                                          </li>
                                                      </ul>
                                                  </li>

                                              </ul>
                                              <li><i className="fa fa-circle"></i>Deployment of the solution in AWS server using AWS elastic Beanstalk
                                              </li>
                                              <li><i className="fa fa-circle"></i>Revue code and create pull requests using GIT and GITLAB
                                              </li>
                                              <li><i className="fa fa-circle"></i>Prepare and participate in client demonstrations
                                              </li>
                                              <div className="mt-1">
                                                  Technologies used:
                                                  <ul className="mh-client-item-sublist">
                                                      <li><i className="fa fa-square-o"></i>Front-end : ReactJs,
                                                          MaterialUI, CSS, JSS.
                                                      </li>
                                                      <li><i className="fa fa-square-o"></i>Back-end: NodeJS, ExpressJS , Sequelize, Redis, MySQL , AWS(S3 , elastic beanstalk)
                                                      </li>
                                                      <li><i className="fa fa-square-o"></i>Outils : Clickup, Gitlab
                                                          VScode, GIT,
                                                      </li>
                                                  </ul>
                                              </div>
                                          </Col>


                                      </Row>
                                      </Box>
                                  </Col>

                              </Row>

                          </Col>

                      </Carousel.Item>

                      <Carousel.Item>
                          <Col xs={12}>

                              <Row className={"px-md-5 justify-content-center mb-4"}>
                                  <Col style={{maxWidth:700}}>
                                      <Box>   <Row >
                                          <Col xs={12}>
                                              <Row className={"align-items-center"} >
                                                  <Col xs={"auto"}>
                                                      <Row>
                                                          <Col xs={12}>
                                                              <h4 className={"project-company"}>WIMOBI</h4>
                                                          </Col>
                                                          <Col xs={12}>
                                                              <h6  className={"exp-pos"}>FULLSTACK JS developer</h6>
                                                          </Col>
                                                      </Row>
                                                  </Col>

                                              </Row>

                                          </Col>
                                          <Col xs={12}>
                                              <span className={"exp-date"}>6 month</span>
                                          </Col>
                                          <Col xs={12} className={"pt-3"}>
                                              <h4>Project: PI.Bot</h4>
                                              <p>
                                                  Designing and developing a platform for creating chatbots
                                              </p>
                                              <ul>
                                                  <li><i className="fa fa-circle"></i>Preparation of functional specifications.

                                                  </li>
                                                  <li>
                                                      <i className="fa fa-circle"></i>Development of the Backend part using NodeJs
                                                      <ul className="mh-client-item-sublist">
                                                          <li><i className="fa fa-square-o"></i>Creation of the project architecture with NodeJS
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>Create a connection with the mongodb using mongooseJS ODM
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>Creating APIs for user and chatbot management.
                                                          </li>
                                                      </ul>
                                                  </li>
                                                  <li>
                                                      <i className="fa fa-circle"></i>Development of the frontend part using Angular
                                                      <ul className="mh-client-item-sublist">
                                                          <li><i className="fa fa-square-o"></i>Implementing User Authentication with Jwt
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>Development of the user interfaces using Material design
                                                          </li>
                                                          <li><i className="fa fa-square-o"></i>Consumption and integration of data flows from a rest API
                                                          </li>
                                                      </ul>
                                                  </li>

                                              </ul>
                                              <li><i className="fa fa-circle"></i>Developing a mobile application that communicates with a chatbot for the demonstration using Ionic.
                                              </li>
                                              <div className="mt-1">
                                                  Technologies used:
                                                  <ul className="mh-client-item-sublist">
                                                      <li><i className="fa fa-square-o"></i>Front-end : Angular v9 , Material design.                                                MaterialUI, CSS, JSS.
                                                      </li>
                                                      <li><i className="fa fa-square-o"></i>Back-end: NodeJS, ExpressJS , MongooseJS, MongoDB
                                                      </li>
                                                  </ul>
                                              </div>
                                          </Col>


                                      </Row>
                                      </Box>
                                  </Col>

                              </Row>

                          </Col>

                      </Carousel.Item>
                  </Carousel>
              </Bounce>
            </Col>
        </Row>

    );
}

export default Projects;