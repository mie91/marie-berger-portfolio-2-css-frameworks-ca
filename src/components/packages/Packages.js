import React from 'react';
import Heading from "../layout/Heading";
import Description from '../layout/Description';
import {Col, Row, Container } from "react-bootstrap";
import PackageList from "../packages/PackageList";


function Packages() {
    return (
    <Container>
        <Col className="col-sm-12">
            <Heading title="Packages"/>
            <Description descriptionText = "Non sit nisi occaecat consequat minim. Non deserunt sit sunt eiusmod pariatur aliquip excepteur elit. Et culpa sunt ad ex eiusmod enim enim. Aute velit aliquip sit et quis ad fugiat."/>
            <Row>
                <PackageList></PackageList>
            </Row>
        </Col>
    </Container>
    );


}

export default Packages;