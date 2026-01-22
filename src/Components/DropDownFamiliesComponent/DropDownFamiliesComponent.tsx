import { Container, Row, Col, Dropdown, DropdownButton, ListGroup } from "react-bootstrap";
import "./DropDownFamiliesComponent.css";
import "../../Sources/CommonStyleSheet.css"
import data from '../../Sources/GuestList.json';
import { useState } from "react";

const DropDownFamiliesComponent = () => {
    const jsonData: Record<string, string[]> = data as Record<string, string[]>;

    const [familyName, setFamilyName] = useState("")
    const [guestNumber, setGuestNumber] = useState(0)
    const [guestList, setGuestList] = useState([""])
    const [isVisible, setIsVisible] = useState(false)

    const handleSelect = (eventKey: any) => {
        setFamilyName(eventKey)
        setGuestNumber(jsonData[eventKey].length)
        setGuestList(jsonData[eventKey])
        setIsVisible(true)
    };
    return (
        <Container fluid className="d-flex flex-column" style={{ backgroundColor: "rgb(226, 218, 200, 1)" }}>
            <Row>
                <Col><h1 className="wedding-font center-text" style={{ color: "#4254AB" }}>Lista de invitados</h1></Col>
            </Row>
            <Row>
                <Col><h3 className="wedding-font-xsm center-text" style={{ color: "#4254AB" }}>Su compañía hace de este día algo aún más especial. A continuación, encontrará el detalle de las personas invitadas</h3></Col>
            </Row>
            <Row>
                <Col>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title="Seleccione su respectiva familia"
                        onSelect={handleSelect}
                        className="d-flex justify-content-center custom-dropdown"
                        variant="Dark"
                    >
                        {Object.keys(data).map((key) => (
                            <Dropdown.Item eventKey={key} key={key}>
                                {key}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton></Col>
            </Row>
            {((isVisible) && (
                <Row style={{ paddingBottom: "50px" }}>
                    <div className="background-image-paper" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
                        <h3 className="wedding-font-xsm center-text blue-green col-sm-12" style={{ paddingTop: "50px",fontSize:"19px" }}>Hola {familyName} hemos reservado "{guestNumber}" espacio(s) asignados a:</h3>
                        <ul className="guest-list">
                            {guestList.map((name, index) => (
                                <li key={index} className="wedding-font-xsm center-text blue-green col-sm-12" style={{paddingRight: "6%",fontSize:"18px"}}>{name}</li>
                            ))}
                        </ul>
                    </div>
                </Row>
            ))}
        </Container>
    )
};

export default DropDownFamiliesComponent;
