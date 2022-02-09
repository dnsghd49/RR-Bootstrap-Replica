import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function Menubar() {
    return (
        <Navbar bg="light" expand={false} style={{height:'5em'}}>
            <Container fluid>
                <Col sm='13'>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <img src="https://www.instacart.com/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" alt='instacart LOGO' />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-grow-1 pe-3">
                                <Nav.Link href="/Departments">Departments</Nav.Link>
                                <Nav.Link href="/waystoSHOP">More ways to shop</Nav.Link>
                                <Nav.Link href="/Help">Help</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Navbar.Brand href="/home">
                        <img style={{ paddingLeft: '0.5em', height: '24px', width: '149px' }} src="https://www.instacart.com/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" alt='instacart LOGO' />
                    </Navbar.Brand>
                </Col>
                <Col sm='-1' style={{ display: "flex" }}>
                    <Nav.Link href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>{' '}
                </Col>
            </Container>
        </Navbar>
    )
}

export default Menubar