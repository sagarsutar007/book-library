import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function Services(){
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <Card className="mt-3">
                        <Card.Body>
                            <h4>Request Book</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <Link className="btn btn-primary btn-sm" to="/services/request-book">Click here</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="mt-3">
                        <Card.Body>
                            <h4>Return Book</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <Link className="btn btn-primary btn-sm" to="/services/return-book">Click here</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="mt-3">
                        <Card.Body>
                            <h4>Purchase Book</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <Link className="btn btn-primary btn-sm" to="/services/purchase-book">Click here</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Services;