import { Container, Row, Col } from "react-bootstrap";
import "./GalleryComponent.css";
import "../../Sources/CommonStyleSheet.css"
import { useState } from "react";
import Picture1 from "../../asseets/Alexis.jpeg";
import Picture2 from "../../asseets/Picture1.jpeg";
import Picture3 from "../../asseets/Picture2.jpeg";
import Picture4 from "../../asseets/Picture3.jpeg";
import Picture5 from "../../asseets/Picture4.jpeg";
import Picture6 from "../../asseets/Picture5.jpeg";
import Picture7 from "../../asseets/Picture6.jpeg";
import Picture8 from "../../asseets/Picture7.jpeg";
import Picture9 from "../../asseets/Picture8.jpeg";
import Picture10 from "../../asseets/Picture9.jpeg";
import Picture11 from "../../asseets/Picture10.jpg";
import Picture12 from "../../asseets/Picture11.jpeg";
    

const GalleryComponent = () => {
    const [displayedImage, setDisplayedImage] = useState(Picture1)
    const images = [
        { src: Picture1, alt: 'Image 1' },
        { src: Picture2, alt: 'Image 2' },
        { src: Picture3, alt: 'Image 3' },
        { src: Picture4, alt: 'Image 4' },
        { src: Picture5, alt: 'Image 5' },
        { src: Picture6, alt: 'Image 6' },
        { src: Picture7, alt: 'Image 7' },
        { src: Picture8, alt: 'Image 8' },
        { src: Picture9, alt: 'Image 9' },
        { src: Picture10, alt: 'Image 10' },
        { src: Picture11, alt: 'Image 11' },
        { src: Picture12, alt: 'Image 12' },

        
        
    ];

    return (
        <Container fluid className="background-image-gallery d-flex flex-column">
            <Row style={{ paddingTop: "10px" }}>
                <Col><h1 className="wedding-font center-text">Nuestra galería</h1></Col>
            </Row>
            <Row>
                <div className="col-sm-6 img-main">
                    <img src={displayedImage} alt="icon" />
                </div>
                <div className="col-sm-6">
                    <Row className="scrollable">
                        {images.map((image, index) => (
                            <Col key={index} xs={4} md={3} lg={2}>
                                <div className="img-wrapper">
                                    <img src={image.src} alt={image.alt} onClick={() => setDisplayedImage(image.src)} />
                                </div>
                            </Col>

                        ))}
                    </Row>
                </div>
            </Row>
        </Container>
    )
};

export default GalleryComponent;