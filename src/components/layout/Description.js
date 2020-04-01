import React from 'react';
import PropTypes from "prop-types";

function Description ({descriptionText}) {
    return (
    <p className="pageDescription">{descriptionText}</p>
    );
}

 Description.propTypes = {
     descriptionText: PropTypes.string.isRequired
 };

 
export default Description;