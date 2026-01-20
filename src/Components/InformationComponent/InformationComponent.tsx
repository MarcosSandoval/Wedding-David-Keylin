import { Container, Row } from "react-bootstrap";
import "./InformationComponent.css";
import "../../Sources/CommonStyleSheet.css"
import giftIcon from "../../asseets/GiftIcon-White.png"
import dressCodeIcon from "../../asseets/DressCodeIcon.png"
import sinpeIcon from "../../asseets/SinpeIcon.png"
import envelopeIcon from "../../asseets/EnvelopeIcon.png"
import transferIcon from "../../asseets/TransferIcon.png"

const InformationComponent = () => {

    return (
        <Container fluid className="background-information d-flex flex-column content-container without-overflow">
            <Row>
                <div className="col-sm-6">
                    <Row>
                        <div className="col-12">
                            <h3
                                className="wedding-font center-text blue-green without-stroke"
                                style={{
                                    fontSize: "1.6rem",
                                    fontFamily: "'Times New Roman', Times, serif",
                                    fontStyle: "italic",
                                    fontWeight: "normal",
                                    lineHeight: "1.6"
                                }}
                            >
                                Codigo de Vestimenta.
                            </h3>
                        </div>
                    </Row>

                    <Row>
                        <div className="col-12">
                            <div className="dress-code-icon-container">
                                <img src={dressCodeIcon} alt={""} className="dress-code-icon" />
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <h1 className="wedding-font-xsm blue-green">Para asistir al evento debe portar un código de vestimenta: </h1>
                        <h1 className="wedding-font-sm blue-green bold">Formal</h1>
                    </Row>

                    {/* ✅ PALETA CON NOMBRE DEBAJO */}
                    <Row style={{ paddingTop: "7%", paddingBottom: "7%" }}>
                        <div className="col-2" style={{ paddingRight: "2px", paddingLeft: "2px" }}>
                            <div className="color-item">
                                <div className="circle" style={{ backgroundColor: "#1E1E1E" }}></div>
                                <span className="color-label">Negro</span>
                            </div>
                        </div>

                        <div className="col-2" style={{ paddingRight: "2px", paddingLeft: "2px" }}>
                            <div className="color-item">
                                <div className="circle" style={{ backgroundColor: "#0f4b63" }}></div>
                                <span className="color-label color-blue">Azul</span>
                            </div>
                        </div>

                        <div className="col-2" style={{ paddingRight: "2px", paddingLeft: "2px" }}>
                            <div className="color-item">
                                <div className="circle" style={{ backgroundColor: "#D31220" }}></div>
                                <span className="color-label color-red">Rojo</span>
                            </div>
                        </div>

                        <div className="col-2" style={{ paddingRight: "2px", paddingLeft: "2px" }}>
                            <div className="color-item">
                                <div className="circle" style={{ backgroundColor: "#E2A79B" }}></div>
                                <span className="color-label color-rose">Oro Rosa</span>
                            </div>
                        </div>

                        <div className="col-2" style={{ paddingRight: "2px", paddingLeft: "2px" }}>
                            <div className="color-item">
                                <div className="circle" style={{ backgroundColor: "#c4b8b8" }}></div>
                                <span className="color-label">Plateado</span>
                            </div>
                        </div>

                        <div className="col-2" style={{ paddingRight: "2px", paddingLeft: "2px" }}>
                            <div className="color-item">
                                <div className="circle add-border" style={{ backgroundColor: "#f5f5f5" }}></div>
                                <span className="color-label">Blanco</span>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <h1 className="wedding-font-xsm" style={{ color: "red", paddingBottom: "0%", fontSize: "1.08rem" }}>No se permite la anterior paleta de colores dentro de la vestimenta de los invitados.</h1>
                        <h1 className="wedding-font-xsm" style={{ color: "red", paddingTop: "0%", fontSize: "90%" }}>Restricción con los colores negro y blanco aplica solo para las mujeres.</h1>
                    </Row>
                </div>

                <div className="col-sm-6" style={{ backgroundColor: "rgb(226, 167, 155)" }}>
                    <Row><h1 className="wedding-font center-text without-stroke" style={{ color: "#5A775E" }}>Mesa de Regalos</h1></Row>
                    <Row><div className="dress-code-icon-container"><img src={giftIcon} alt={""} className="dress-code-icon" /></div></Row>
                    <Row>
                        <h1 className="wedding-font-xsm without-stroke lateral-padding"style={{ color: "#5A775E" }}>Su compañia es nuestro regalo más preciado, sin embargo, cualquier muestra de cariño hacia nosotros puede realizarla a través de:</h1>
                    </Row>

                    <Row>
                        <div className="col-12" style={{ paddingRight: "0px" }}>
                            <Row className="border-bottom">
                                <div className="col-4"><div className="item-icon-container"><img src={sinpeIcon} alt={""} className="item-icon" /></div></div>
                                <div className="col-8">
                                    <ul className="item-container">
                                        <li className="wedding-font-xsm"style={{ color: "#5A775E" }}>8640-8516</li>
                                        <li className="wedding-font-xsm"style={{ color: "#5A775E" }}>8669-9309</li>
                                    </ul>
                                </div>
                            </Row>
                        </div>

                        <div className="col-12">
                            <Row className="border-bottom">
                                <div className="col-4"><div className="item-icon-container"><img src={envelopeIcon} alt={""} className="item-icon" /></div></div>
                                <div className="col-8"><h1 className="wedding-font-xsm item-container" style={{ textAlign: 'left',color: "#5A775E" }} >Lluvia de sobres(efectivo)</h1></div>
                            </Row>
                        </div>

                        {/* <div className="col-12">
                            <Row>
                                <div className="col-4"><div className="item-icon-container"><img src={transferIcon} alt={""} className="item-icon" /></div></div>
                                <div className="col-8">
                                    <ul className="item-container">
                                        <li className="wedding-font-xsm">Colones: CR03010200009531399045</li>
                                        <li className="wedding-font-xsm">Dólares: CR24010200009589115704</li>
                                    </ul>
                                </div>
                            </Row>
                        </div> */}
                    </Row>
                </div>
            </Row>
        </Container>
    )

};

export default InformationComponent;

