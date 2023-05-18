import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import AboutMe from "./components/content/AboutMe";
import Skills from "./components/content/Skills";
import {Col, Row} from "react-bootstrap";
import MyExperience from "./components/content/MyExperience";
import Education from "./components/content/Education";
import Projects from "./components/content/Projects";
import ContactMe from "./components/content/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <AboutMe />
        <Container className={"mt-3"} >
            <Row>

                <Skills />

                <Row>
                    <Col xs={12} md={6}>
                        <MyExperience/>
                    </Col>
                    <Col  xs={12} md={6}>
                        <Education/>
                    </Col>
                </Row>

                <Projects/>



            </Row>

        </Container>
        <ContactMe/>
        <Footer />
    </div>
  );
}

export default App;
