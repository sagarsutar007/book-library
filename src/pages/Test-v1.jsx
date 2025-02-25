import { useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

const students = [
    {
        name: "Sunita Marandi",
        age: 22,
        occupation: "Student",
        qualification: "MCA"
    },
    {
        name: "Lipsa Panda",
        age: 20,
        occupation: "Student",
        qualification: "BCA"
    },
    {
        name: "Jyotirmayee Pradhan",
        age: 20,
        occupation: "Student",
        qualification: "BCA"
    },
    {
        name: "Abhishek Xalxo",
        age: 24,
        occupation: "Student",
        qualification: "BCA"
    }
]
function Test() {
    const [student, setStudent] = useState(students[0]);
    const [counter, setCounter] = useState(0);
    const handleChangeStudent = () => {
        const nextCounter = (counter + 1) % students.length;
        setCounter(nextCounter);
        setStudent(students[nextCounter]);
    };

    return (<>
        <Container>
            <Row>
                <Col>
                    <h2 className="my-4">My Profile</h2>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Card>
                        <ul className="list-group">
                            <li className="list-group-item">Name: {student.name}</li>
                            <li className="list-group-item">Age: {student.age}</li>
                            <li className="list-group-item">Occupation: {student.occupation}</li>
                            <li className="list-group-item">Qualification: {student.qualification}</li>
                        </ul>
                        <Card.Footer>
                            <Button variant="primary" onClick={handleChangeStudent}>Next Student</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>)
}

export default Test;