import React from 'react';
import FormFile from 'react-bootstrap/FormFile';
import { Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <div className="mx-auto w-75 p-5">
            <h5 className = "lead text-white text-center p-3">I am always excited to work on some awesome projects, let's discuss over coffee.</h5>
            <Form action="https://formcarry.com/s/NOHNyYhjrp" method="POST" acceptCharset="UTF-8" >
                <Form.Group controlId="formBasicText">
                    <Form.Label className="text-white">Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required name="firstName" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required name="email"/>
                    <Form.Text className="text-muted">
                        I'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className = "text-white">Your Message</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="Coffee with me ....." name="anotherInput" />
                </Form.Group>
                <input type="hidden" name="_gotcha" />
                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact;
