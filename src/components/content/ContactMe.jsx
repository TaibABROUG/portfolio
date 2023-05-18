import {Col, Container, Row, Stack} from "react-bootstrap";
import Box from "../common/Box";
import issatLogo from "../../assets/issat.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faLinkedInIn, faLink} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
export default function ContactMe() {
    return (
        <Container  fluid id={"contact"} className={"contact-section "}>
        <Row >
            <Col xs={12} className={"text-center mt-5"}>
                <Flip left> <h1>Contact</h1></Flip>
            </Col>

              <Col >
<Fade left>
    <Stack className={"align-items-center"}>
        <Box>
            <Row className={"align-items-center"}>
                <Col xs={"auto"}>
                    <span className={"icon-contact"}> <FontAwesomeIcon icon={faEnvelope} /></span>
                </Col>
                <Col>
                    <Stack>
                        <h4>Email</h4>
                        <span>taibabro@gmail.com</span>
                    </Stack>
                </Col>

            </Row>
        </Box>
        <Box>
            <Row className={"align-items-center"}>
                <Col xs={"auto"}>
                    <span className={"icon-contact"}>  <FontAwesomeIcon icon={faPhone} /></span>
                </Col>
                <Col>
                    <Stack>
                        <h4>Phone</h4>
                        <span>+216 53 309 866</span>
                    </Stack>
                </Col>

            </Row>
        </Box>
        <Box>
            <Row className={"align-items-center"}>
                <Col xs={"auto"}>
                <span className={"icon-contact"}> <svg width={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></span>
                </Col>
                <Col>
                    <Stack>
                        <h4>Linkedin</h4>
                        <a href={"https://www.linkedin.com/in/Taib-abroug/"}><span><FontAwesomeIcon icon={faLink} />taib-abroug</span></a>
                    </Stack>
                </Col>

            </Row>
        </Box>


    </Stack>
</Fade>
</Col>


        </Row>
        </Container>

    )
}