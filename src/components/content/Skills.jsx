import {Col, Row} from "react-bootstrap";
import Box from "../common/Box";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const devSkills = ["ReactJjs" , "NextJs" , "Angular" ,"javascript" , "Typescript","NodeJs" ,
    "ExpressJs", "Jwt" ,"Rest" ,"Axios" ,"HTML5" ,"CSS", "MaterialUI", "Bootstrap" , "PHP" ];
const methodSkills = ["Scrum" ,"Kanban","clickup" , "Jira"] ;
const integrationSkills=[ "GitHub" , "Gitlab", "Bitbucket"] ;
const databaseSkills=["Mysql", "mongoDB", "firebase"]
export default function Skills() {

    return (
        <Row id={"skills"}>
            <Col xs={12}>
                <Flip left>  <h1>SKILLS</h1></Flip>
            </Col>
            <Col md={6} xs={12}>
                <Fade left delay={"500"}  duration={"2000"}>
                    <Box>
                        <Row className={"gap-3"}>
                            <Col xs={12}>
                                <h2>Development</h2>
                            </Col>
                            <Col xs={12} className={"items-group-skills"}>

                                {
                                    devSkills.map((item)=><span className={"item-skill"}>{item} </span> )
                                }

                            </Col>
                        </Row>
                    </Box>
                </Fade>

            </Col>
            <Col md={6} xs={12}>
               <Fade right delay={"500"}  duration={"2000"}> <Box>
                    <Row className={"gap-3"}>
                        <Col xs={12}>
                            <h2>Methodologie</h2>
                        </Col>
                        <Col xs={12}>

                            {
                                methodSkills.map((item)=> <span className={"item-skill"}>{item} </span>)
                            }
                        </Col>
                    </Row>
                </Box>
               </Fade>
            </Col>
            <Col md={6} xs={12}>
                <Fade left delay={"500"}  duration={"2000"}>
                <Box>
                    <Row className={"gap-3"}>
                        <Col xs={12}>
                            <h2>Versioning tools</h2>
                        </Col>
                        <Col xs={12}>
                            {
                                integrationSkills.map((item)=> <span className={"item-skill"}>{item} </span>)
                            }
                        </Col>
                    </Row>
                </Box>
                </Fade>
            </Col>
            <Col md={6} xs={12}>
                <Fade right delay={"500"}  duration={"2000"}>
                <Box>
                    <Row className={"gap-3"}>
                        <Col xs={12}>
                            <h2>Data Base</h2>
                        </Col>
                        <Col xs={12}>
                            {
                                databaseSkills.map((item)=> <span className={"item-skill"}>{item} </span>)
                            }

                        </Col>
                    </Row>
                </Box>
                </Fade>
            </Col>
        </Row>


    )
}