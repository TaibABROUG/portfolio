import {Col, Row} from "react-bootstrap";
import Box from "../common/Box";
export default function ProjectItem() {
    return (
        <Row>
            <h2>Education</h2>
            { [1,2].map(()=><Col xs={12}>
                <Box>
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col xs={"auto"}>
                                    <div style={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: "lightgray",
                                        borderRadius: "50%"
                                    }}>

                                    </div>
                                </Col>
                                <Col>
                                    <h4>Shcoole Name here</h4>
                                </Col>

                            </Row>

                        </Col>
                        <Col xs={12}>
                            <span>start date - end date</span>
                        </Col>
                        <Col xs={12}>
                            <p>
                                Diplôme d'ingénieur en informatique spécialisé dans les technologies du web
                            </p>
                        </Col>
                    </Row>
                </Box>
            </Col>)
            }
        </Row>


    )
}