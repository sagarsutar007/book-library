import { Container, Row } from "react-bootstrap";

function WrapContent({children}) {
    return (
        <Container>
            <Row>
                {children}
            </Row>
        </Container>
    );
}

export default WrapContent;