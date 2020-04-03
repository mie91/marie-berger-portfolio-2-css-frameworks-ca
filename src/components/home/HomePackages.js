import React from 'react';
import {Button } from "react-bootstrap";
import PropTypes from "prop-types";

function HomePackages ({packTitle, packDesc}) {
    return (
        <div className="packageCard">
            <h3>{packTitle}</h3>
            <p>{packDesc}</p>
            <Button className="packageBtn">Find Out More</Button>
        </div>
    );
}

HomePackages.propTypes = {
    packTitle: PropTypes.string.isRequired,
    packDesc: PropTypes.string.isRequired
};

export default HomePackages;