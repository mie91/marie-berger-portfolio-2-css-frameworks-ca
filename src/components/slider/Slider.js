import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image, Container } from "react-bootstrap";
import banner1 from "../slider/images/banner1.jpg";
import banner2 from "../slider/images/banner2.jpg";
import banner3 from "../slider/images/banner3.jpg";


function Slider() {

    return (
        <Container fluid = "sm" className="carouselBox">
            <Carousel className = "theSlider">
                <Carousel.Item>
                <Image className="d-block w-100" src={banner1} alt="Beach and boat in the sunset"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={banner2} alt="Beach"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={banner3}/>
                </Carousel.Item>
            </Carousel>
        </Container>
        
    )
}

export default Slider;