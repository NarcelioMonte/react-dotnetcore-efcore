import {NavDropdown, Navbar, Nav, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default function Menu() {
    return (
        <Navbar bg="info" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Ativy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/cliente/lista">Clientes</Nav.Link>
                    <Nav.Link as={NavLink} to="/atividade/lista">Atividades</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown align="end" title="Titulo do DropDown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Configurações</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>
    )
}
