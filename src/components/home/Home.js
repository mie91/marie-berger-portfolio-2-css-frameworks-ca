import React from 'react';
import {Col, Row, Container } from "react-bootstrap";
import Heading from "../layout/Heading";
import Description from "../layout/Description";
import Slider from "../slider/Slider";
import HomePackages from '../home/HomePackages';

function Home () {
    return (
    <>
        <Slider></Slider>
        <Container>
        <Col className = "col-sm-12" >
            <Heading title="Welcome to January Island Escapes"/>
            <Description descriptionText="Ea elit dolor ullamco incididunt adipisicing magna exercitation aute. Irure do incididunt minim enim culpa in sit id anim ipsum velit nulla dolore. Cillum sit adipisicing cillum anim reprehenderit et ullamco Lorem et do. Dolor velit occaecat sunt aute irure qui aliquip esse voluptate anim."/>
        </Col>
        
        <Col className="packageColumn col-sm-12">
            <Row className="packageRow">
                <HomePackages 
                packTitle="Package 1"
                packDesc="Aliquip anim non fugiat mollit nulla. Deserunt anim mollit commodo sint aute aute veniam. Lorem deserunt excepteur mollit sit pariatur."/>
            
                <HomePackages 
                packTitle="Package 2"
                packDesc="Incididunt deserunt quis sunt Lorem anim. Irure est est excepteur voluptate voluptate. Duis excepteur irure reprehenderit minim sit officia laborum cillum. "/>

                <HomePackages 
                packTitle="Package 3"
                packDesc="Labore elit nostrud aliqua quis est do Lorem in tempor aliqua. Laborum qui id ea duis duis labore. Quis veniam labore fugiat eiusmod voluptate."/>

                <HomePackages 
                packTitle="Package 4"
                packDesc="In cillum ea deserunt exercitation laboris in Lorem ipsum nisi aute. Et irure Lorem mollit ipsum amet laboris aliqua elit do exercitation. In excepteur aliquip labore minim."/>
            </Row>
        </Col>
        </Container>
    </>
    )
}

export default Home;