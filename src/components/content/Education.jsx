import {Col, Row} from "react-bootstrap";
import Box from "../common/Box";
import issatLogo from "../../assets/issat.png"
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
export default function Education() {
    return (
        <Row id={'education'}>
            <Flip left><h2>Education</h2></Flip>
            <Col xs={12}>
               <Fade top delay={"500"}  duration={"2000"}>
                   <Box>
                       <Row>
                           <Col xs={12}>
                               <Row>
                                   <Col xs={"auto"}>
                                       <img src={issatLogo}/>
                                   </Col>
                                   <Col>
                                       <h4>Higher institute of applied sciences and technology of sousse</h4>
                                   </Col>

                               </Row>

                           </Col>
                           <Col xs={12}>
                               <span className={"edu-date"}>2017 - 2020</span>
                           </Col>
                           <Col xs={12}>
                               <p>
                                   National Diploma of Computer Engineering
                               </p>
                           </Col>
                       </Row>
                   </Box>
               </Fade>
            </Col>
            <Col xs={12}>
              <Fade top delay={"500"}  duration={"2000"}>
                  <Box>
                      <Row>
                          <Col xs={12}>
                              <Row>
                                  <Col xs={"auto"}>
                                      <img src={issatLogo}/>
                                  </Col>
                                  <Col>
                                      <h4>Higher institute of applied sciences and technology of sousse</h4>
                                  </Col>

                              </Row>

                          </Col>
                          <Col xs={12}>
                              <span className={"edu-date"}>2015 - 2017</span>
                          </Col>
                          <Col xs={12}>
                              <p>
                                  Integrated scientific preparatory cycle
                              </p>
                          </Col>
                      </Row>
                  </Box>
              </Fade>
            </Col>

        </Row>


    )
}