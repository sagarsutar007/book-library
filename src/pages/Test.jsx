import { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

function Test () {
    const [name, setName] = useState('Sagar');
    const [url, setUrl] = useState('netflix');
    useEffect(()=>{
        if (url == "Prime Video") {
            window.location.href="https://primevideo.com";  
        }
            
    },[url, name]);
    
    return (
        <Container>
            <Row>
                <Col lg={4} className="mx-auto my-5">
                    <Card>
                        <Card.Header>Card Title</Card.Header>
                        <Card.Body>
                        <h3 className="mt-3">You are on {url}</h3>
                        <Button onClick={()=>{
                            setUrl('Prime Video');
                        }} className="w-100 mt-3">Goto Prime Video</Button>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    )

}

export default Test