import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsFillPenFill, BsFillTrash3Fill } from "react-icons/bs";

function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const submitForm = () => {
        console.log("Name", name);
        console.log("Phone", phone);
        console.log("Message", message);
    }


    return (
        <>
            <h1 className="text-center my-3">Contact Us</h1>
            <p className="text-center">You can send us your suggestion, queries or ask for any information</p>
            <Form>
                <Row>
                    <Col lg={4} className="mx-auto">
                        <Card>
                            <Card.Header>
                                <BsFillPenFill /> Write your queries here: -
                            </Card.Header>
                            <Card.Body>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type='text' onChange={(event) => {
                                        console.log('name changed', event.target.value)

                                        setName(event.target.value)
                                    }} placeholder='Sagar Kumar Sutar' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type='number' onChange={(e) => {
                                        setPhone(e.target.value)
                                    }} step={5} placeholder='9874563210' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control onChange={(e) => {
                                        setMessage(e.target.value)
                                    }} as="textarea" rows={3} placeholder='Write you message here...' />
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer>
                                <Button className='mt-3 w-100' variant='dark' onClick={submitForm}>Submit</Button>
                                <Button type='reset' className='mt-3 w-100' variant='danger'><BsFillTrash3Fill /></Button>
                            </Card.Footer>
                        </Card>



                    </Col>
                </Row>

            </Form>
        </>
    )
}

export default Contact;