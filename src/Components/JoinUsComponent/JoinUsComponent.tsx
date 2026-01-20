import "./JoinUsComponent.css";
import "../../Sources/CommonStyleSheet.css"
import { Container, Row, Col } from "react-bootstrap";

const JoinUsComponent = () => {

    return (
        <Container fluid className="background-image-join-us" style={{ backgroundColor: "white", marginTop: "10px", padding: "10vh" }}>
            <Row>
                <Col>
                    <img src={require("../../asseets/Logo.png")} alt="Loading" className="resize-logo" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="center wedding-paragraph-font slide-in-right" style={{ paddingTop: "10vh", color: "#4254AB" }}>"Muy pronto uniremos nuestras vidas"</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="center wedding-paragraph-font slide-in-left" style={{ paddingTop: "5vh" }}>Con ilusión y amor comenzamos un nuevo capítulo, y deseamos que nos acompañen en este día tan especial</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default JoinUsComponent;