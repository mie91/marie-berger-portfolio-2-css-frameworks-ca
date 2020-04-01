import React from 'react';
import {Button } from "react-bootstrap";

function HomePackages ({packTitle, packDesc}) {
    return (
        <div className="packageCard">
            <h3>{packTitle}</h3>
            <p>{packDesc}</p>
            <Button className="packageBtn">Find Out More</Button>
        </div>
    );
}
export default HomePackages;