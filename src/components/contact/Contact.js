import React, {useState} from "react";
import {Button, Col, Form, Container} from "react-bootstrap"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Heading from "../layout/Heading";
import Description from "../layout/Description";
import ErrorMessage from "../contact/ErrorMessage";







const telephoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({

    firstName: yup
        .string()
        .required("Required"),

    lastName: yup
        .string()
        .required("Required"),

    telephoneNumber: yup
        .string().matches(telephoneRegExp, "The telephone number is not valid"),
        

    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Required")
});


function Contact() {
    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
        setValidated(true);
    }

    return (
        <Container>
            <Col className="col-sm-10">
                <div className="formBox">
                <Heading title="Contact Us"/>
                <Description descriptionText="Et proident esse qui do officia est. Do amet aliquip nulla Lorem culpa laborum. Laboris proident mollit proident eiusmod amet irure nisi sunt. Irure irure in proident incididunt. Minim laboris cupidatat est amet irure. Ex elit id consequat eiusmod ullamco laborum eiusmod deserunt occaecat. Cupidatat laborum aute exercitation pariatur aliqua."/>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="labelNames">
                        
                        </div>

                        <Form.Group>
                            <Form.Label>First name:</Form.Label>
                            <Form.Control name="firstName" placeholder="Your first Name" ref={register} />
                            {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last name:</Form.Label>
                            <Form.Control name="lastName" placeholder="Your last name" ref={register} />
                            {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Telephone Number:</Form.Label>
                            <Form.Control name="telephoneNumber" placeholder="Example: 98765432" ref={register} />
                            {errors.telephoneNumber && <ErrorMessage>{errors.telephoneNumber.message}</ErrorMessage>}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email Address:</Form.Label>
                            <Form.Control name="email" placeholder="Your e-mail" ref={register} />
                            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                            {validated && <div className="formValidated">Your request was validated!</div>}
                        </Form.Group>
                        <Button className="mainButton" type="submit">Submit</Button>
                        
                    </Form>
                </div>
            </Col>
        </Container>
    );
}

export default Contact;