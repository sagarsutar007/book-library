import { useReducer } from "react";
import { Container,Row,Col,Card, Button } from "react-bootstrap";

function manageCounter(state, action){
    if (action.type == "decrement") {
        let count = state.count - 1;

        return {
            count: count
        }
    }

    if (action.type == "increment") {
        return {
            count: state.count + 1
        }
    }
}

function TestReducer() {
    const [counter, dispatch] = useReducer(manageCounter, { count:5 });

    console.log("called");
    return (
        <Container>
            <Row>
                <Col lg={4} className="mx-auto p-5">
                    <h1 className="text-center">useReducer Hook</h1>

                    <Card>
                        <Card.Body>
                            <h3 className="text-danger text-center">{counter.count}</h3>
                        </Card.Body>
                        <Card.Footer>
                            <div className="btn-group w-100">
                                <Button variant="primary" onClick={()=>{
                                    dispatch({type:'decrement'});
                                }}>- Decrease</Button>
                                <Button variant="success" onClick={()=>dispatch({type: 'increment'})}>+ Increase</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default TestReducer;