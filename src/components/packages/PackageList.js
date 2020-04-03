import React from 'react';
import PackageData from "../assets/json/packageData";
import { Button } from "react-bootstrap";


function PackageList () {
    return (
        <div className="cardHolder">
            {PackageData.map((packageDetail, index)=>{
                return (
                <div className="packagePageCard" key={packageDetail.id}>    
                    <h3 >{packageDetail.title}</h3>
                    <p>{packageDetail.description}</p>
                    <Button className="packageBtn">Find Out More</Button>
                </div>

                );
            })}
        </div>
    );
        }

export default PackageList;