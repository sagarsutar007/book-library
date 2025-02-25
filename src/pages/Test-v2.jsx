import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useState, useRef } from 'react'

function Test () {
    const [name, setName] = useState('');
    const inputName = useRef();
    
    function focusInput(){
        inputName.current.focus();
    }
    return (
        <Container>
            <Row>
                <Col lg={4} className="mx-auto my-5">
                    <Card>
                        <Card.Body>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Enter Name" 
                                    value={name}
                                    onChange={(e)=>{
                                        setName(e.target.value);
                                    }}
                                    ref={inputName}
                                />
                            </div>
                            <h3 className="mt-3">My name is: {name}</h3>
                            <Button onClick={focusInput} className="w-100 mt-3">Set Focus</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    )

}

export default Test