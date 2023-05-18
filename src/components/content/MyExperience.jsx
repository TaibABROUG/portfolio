import {Col, Row} from "react-bootstrap";
import Box from "../common/Box";
import logoMazars from "../../assets/logoMazars.png";
import logoAcoba from "../../assets/iacob.png";
import logoIcigai from "../../assets/icigai.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
export default function MyExperience() {
    return (
        <Row id={"experience"}>
            <Flip left>
            <h2>Experience</h2>
            </Flip>
            <Col xs={12}>
                <Fade top delay={"500"}  duration={"2000"}>
                <Box>

                    <Row>

                        <Col xs={12}>
                            <Row className={"align-items-center"} >
                                <Col xs={"auto"}>
                                    <img width={100} src={logoMazars}/>

                                </Col>
                                <Col xs={"auto"}>
                                    <Row>
                                        <Col xs={12}>
                                            <h4>Mazars</h4>
                                        </Col>
                                        <Col xs={12}>
                                            <h6  className={"exp-pos"}>Full stack JS developer</h6>
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>

                        </Col>
                        <Col xs={12}>
                            <span className={"exp-date"}>Since december 2022</span>
                        </Col>
                        <Col xs={12} className={"pt-3"}>

                            <ul>
                                <li>Development of the backend and frontend of a new version of an evaluation system.</li>
                                <li>Development of highly customizable reusable components</li>
                            </ul>
                            <p><span className={"fw-bold"}>Technologies used:</span> NodeJS, ExpressJS, MySQL, ReactJS, Next.js, JIRA, Bitbucket, Git.</p>

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
                            <Row className={"align-items-center"} >
                                <Col xs={"auto"}>
                                    <img style={{backgroundColor:"gray"}} width={100} src={logoAcoba}/>

                                </Col>
                                <Col xs={7}>
                                    <Row>
                                        <Col xs={12}>
                                            <h4>ACOBA Tunisia</h4>
                                        </Col>
                                        <Col xs={12}>
                                            <h6  className={"exp-pos"}>FULLSTACK software enginee</h6>
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>

                        </Col>
                        <Col xs={12}>
                            <span className={"exp-date"}>From March 2021 to November 2022 </span>
                        </Col>
                        <Col xs={12} className={"pt-3"}>

                            <ul>
                                <li>Development of the backend and frontend of a new version of a surveillance camera visualization platform. </li>
                                <li>Creation of ergonomic interfaces and necessary web services for the application.</li>
                                <li>Ensure readable, maintainable, and optimized code.</li>
                                <li>Maintenance of existing versions of different projects</li>

                            </ul>
                            <p><span className={"fw-bold"}>Technologies used:</span>  Node js ,Express js, React js, MaterialUI, PHP, cakePHP, jquery, git, gitlab , clickup,
                                aws(elastic beanstalk,S3), mysql.</p>

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
                                <Row className={"align-items-center"} >
                                    <Col xs={"auto"}>
                                        <img  style={{backgroundColor:"gray"}} width={100} src={logoIcigai}/>
                                    </Col>
                                    <Col xs={7}>
                                        <Row>
                                            <Col xs={12}>
                                                <h4>ICIGAI Dubai,</h4>
                                            </Col>
                                            <Col xs={12}>
                                                <h6  className={"exp-pos"}>Frontend developer (remote)</h6>
                                            </Col>
                                        </Row>
                                    </Col>

                                </Row>

                            </Col>
                            <Col xs={12}>
                                <span className={"exp-date"}>From September 2020 to February 2021</span>
                            </Col>
                            <Col xs={12} className={"pt-3"}>

                                <ul>
                                    <li>Developing dynamic and visually appealing websites.</li>
                                    <li>Creating responsive user interfaces and integrating front-end components to enhance the user experience.</li>
                                    <li>Building responsive websites from scratch using XD files.</li>
                                </ul>
                                <p><span className={"fw-bold"}>Technologies used:</span> Html5 , css3, javascript, angular9, git.</p>

                            </Col>
                        </Row>
                    </Box>
                </Fade>
            </Col>



        </Row>


    )
}