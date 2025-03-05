import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";


function ServiceDetail() {
    const { serviceId } = useParams();
    const [service, setService] = useState("");
    const [otherServices, setOtherServices] = useState([]);

    useEffect(()=>{
       if(serviceId == "request-book"){
        setService("Request Book");
        setOtherServices([
            {
                "id": 1,
                "name":"Return Book",
                "url":"/services/return-book"
            },
            {
                "id": 2,
                "name":"Purchase Book",
                "url":"/services/purchase-book"
            }
        ]);
       } else if (serviceId == "return-book") {
        setService("Return Book");
        setOtherServices([
            {
                "id": 1,
                "name":"Request Book",
                "url":"/services/request-book"
            },
            {
                "id": 2,
                "name":"Purchase Book",
                "url":"/services/purchase-book"
            }
        ]);
       } else if (serviceId == "purchase-book") {
        setService("Purchase Book");
        setOtherServices([
            {
                "id": 1,
                "name":"Request Book",
                "url":"/services/request-book"
            },
            {
                "id": 2,
                "name":"Return Book",
                "url":"/services/return-book"
            }
        ]);
       }
    },[serviceId]);

    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h1 className="text-primary">{service}</h1>
                </Col>                
            </Row>
            <Row>
                <Col>
                    <h6 className="text-primary">Other Services</h6>
                </Col>
            </Row>
            <Row>
                {
                    otherServices.map((item)=>{
                        return (
                            <Col lg={2} key={item.id}>
                                <Link className="btn btn-link" to={item.url}>{item.name}</Link>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
}

export default ServiceDetail;