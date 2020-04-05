import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Heading from "../layout/Heading";
import Description from "../layout/Description";

const telephoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({

    firstName: yup
        .string()
        .required("A first name is required"),

    lastName: yup
        .string()
        .required("A last name is required"),

    telephoneNumber: yup
        .string().matches(telephoneRegExp, "The telephone number is not valid"),
        

    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required")
});


function Contact() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <Col className="col-sm-10">
            <div className="formBox">
            <Heading title="Contact Us"/>
            <Description descriptionText="Et proident esse qui do officia est. Do amet aliquip nulla Lorem culpa laborum. Laboris proident mollit proident eiusmod amet irure nisi sunt. Irure irure in proident incididunt. Minim laboris cupidatat est amet irure. Ex elit id consequat eiusmod ullamco laborum eiusmod deserunt occaecat. Cupidatat laborum aute exercitation pariatur aliqua."/>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="labelNames">
                    <Form.Label>Your Name:</Form.Label>
                    </div>

                    <Form.Group className="formNames">
                        
                        
                        <Form.Control name="firstName" placeholder="Firstname" ref={register} />
                        {errors.firstName && <p>{errors.firstName.message}</p>}


                        <Form.Control name="lastName" placeholder="Lastname" ref={register} />
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Telephone Number:</Form.Label>
                        <Form.Control name="telephoneNumber" placeholder="Example: 98765432" ref={register} />
                        {errors.telephoneNumber && <p>{errors.telephoneNumber.message}</p>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control name="email" placeholder="E-mail" ref={register} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </Form.Group>

                    <Button className="packageBtn" type="submit">Submit</Button>
                </Form>
            </div>
        </Col>
    );
}

export default Contact;