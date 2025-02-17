import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function MyNavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">
                    <img src="img/react.svg" alt="" /> React Tutorial
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="mx-auto">
                        <Form.Control
                            type="search"
                            placeholder="Search for books"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                    >
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/about" className='nav-link'>About</Link>
                        <Nav.Link href="#">
                            Books
                        </Nav.Link>
                        <NavDropdown title="Login" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/my-account">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/my-orders">My Orders</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Link href="/cart">
                            Cart
                        </Nav.Link> */}
                        <Link to="/contact" className='nav-link'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default MyNavBar;