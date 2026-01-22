import { Container, Row, Col } from "react-bootstrap";
import "./PlacesComponent.css";
import "../../Sources/CommonStyleSheet.css"
import { Button } from 'react-bootstrap';
import UpperDecorator from '../../asseets/UpperCreeperDecorator.png';
import DownDecorator from '../../asseets/DownCreeperDecorator.png';
import IglesiaMariaAuxiliadora from '../../asseets/IglesiaMariaAuxiliadora.jpg';
import SalaDeEventosNila from '../../asseets/SalaDeEventosNila.jpeg';

const PlacesComponent = () => {

    return (
        <Container fluid className="background-image-itinerary d-flex flex-column">
            <Row>
                <Col><h1 className="wedding-font-xsm blue-green"></h1></Col>
            </Row>
            <Row>
                <div className="col-sm-12 col-md-6">
                    <Row><img src={IglesiaMariaAuxiliadora} alt="icon" className="resize-location-picture" style={{paddingTop: "20px"}}/></Row>
                    
                    <Row><h1 className="wedding-font-xsm blue-green">Ceremonia religiosa</h1></Row>
                    <Row><h1 className="wedding-font-xsm blue-green">Hora: 2:00PM</h1></Row>
                    <Row><h1 className="wedding-font-xsm blue-green">Lugar: Parroquia Maria Auxiliadora ,Cartago</h1></Row>
                    <Row><div className="d-flex justify-content-center"> 
                        <Button 
                            size="lg"  
                            style={{backgroundColor: "rgb(226, 218, 200, 1)", borderColor: "rgb(226, 218, 200, 1)", color: "#4257AB"}} 
                            className="wedding-font-xsm location-button d-flex justify-content-center style" 
                            onClick={() => {handleOpenMaps("https://maps.app.goo.gl/QvXBUSfxcDN3Pgn6A" )}}>
                            Ver Ubicación
                        </Button>
                    </div></Row>
                </div>

                <div className="col-sm-12 col-md-6">
                <Row><img src={SalaDeEventosNila} alt="icon" className="resize-location-picture" style={{paddingTop: "20px"}}/></Row>
                <Row><h1 className="wedding-font-xsm blue-green">Celebración</h1></Row>
                <Row><h1 className="wedding-font-xsm blue-green">Hora: 4:00PM</h1></Row>
                <Row><h1 className="wedding-font-xsm blue-green">Lugar: Sala de Eventos Nila, Caballo Blanco</h1></Row>
                <Row><div className="d-flex justify-content-center">
                        <Button 
                            style={{backgroundColor: "rgb(226, 218, 200, 1)", borderColor: "rgb(226, 218, 200, 1)", color: "#4257AB"}} 
                            size="lg" 
                            className="wedding-font-xsm location-button center-items" 
                            onClick={() => {handleOpenMaps("https://maps.app.goo.gl/nh91BCt6nw9FkwDE6")}}>
                                Ver Ubicación
                        </Button>
                    </div></Row>
                </div>
                
            </Row>
            <Row><img src={DownDecorator} alt="icon" style={{paddingTop: "25px"}} className="rezise-decorator"/></Row>
        </Container>
    )
};

const handleOpenMaps = (url: string) => {
    window.open(url, '_blank');
  };

export default PlacesComponent;