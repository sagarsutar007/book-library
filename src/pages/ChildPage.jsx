import { Col } from "react-bootstrap";
import WrapContent from "../components/WrapContent";


function ChildPage(){
    return (<>
        <WrapContent>
            <Col lg={4} className="text-center h1">
                1
            </Col>
            <Col lg={4} className="text-center h1">
                2
            </Col>
            <Col lg={4} className="text-center h1">
                3
            </Col>
        </WrapContent>   

        <WrapContent>
            <Col lg={6} className="text-center h1">
                4
            </Col>
            <Col lg={6} className="text-center h1">
                5
            </Col>
        </WrapContent>
    </>);
}

export default ChildPage;