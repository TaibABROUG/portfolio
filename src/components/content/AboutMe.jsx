import {Col, Container, Row, Stack} from "react-bootstrap";
import Mypic from "../../assets/mypic.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope ,faPhone } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
export default function AboutMe() {
    return (
      <Container fluid id={"home"}>
          <Row className={"aboutme align-items-center justify-content-center"}>
              <Col xs={"auto"} style={{width:500}}>
                  <Fade left delay={"500"}  duration={"2000"}>
                      <Row>
                          <Col xs={12}>
                              <h1>Taib Abroug</h1>
                          </Col>
                          <Col xs={12}>
                              <h4>software engineer: web developer</h4>
                          </Col>
                          <Col xs={12}>
                              <Stack gap={2} >
                                  <span><FontAwesomeIcon icon={faEnvelope} /><span>  taibabro@gmail.com</span></span>
                                  <span><FontAwesomeIcon icon={faPhone} /> +216 53 309 866</span>
                              </Stack>
                          </Col>
                      </Row>
                  </Fade>
              </Col>
              <Col xs={"auto"}>
                <Zoom delay={"500"}  duration={"3000"}>
                    <div style={{width:305 ,height:305 ,backgroundColor:"#0086ff55" , borderRadius:"50%"}}>
                        <img style={{width:300 ,height:300 ,backgroundColor:"lightgray" , borderRadius:"50%"}} src={Mypic}/>
                    </div>
                </Zoom>
              </Col>
          </Row>
      </Container>


    )
}