// src/pages/Dashboard.jsx
import Sidebar from '../components/Sidebar'

import ProductTable from '../components/ProductTable'
import React from 'react';
import { Container, Row, Col, Card, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Dashboard() {
  return (
    
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Barra Lateral */}
      <div style={{ width: '250px', backgroundColor: '#343a40', color: 'white', padding: '20px' }}>
        <h2>Proyecto</h2>
        <Nav className="flex-column">
          <Nav.Link href="#" className="text-white">Tablero</Nav.Link>
          <Nav.Link href="#" className="text-white">Tareas</Nav.Link>
          <Nav.Link href="#" className="text-white">Usuarios</Nav.Link>
          <Nav.Link href="#" className="text-white">Informes</Nav.Link>
          <Nav.Link href="#" className="text-white">Configuraciones</Nav.Link>
        </Nav>
      </div>

      {/* Contenido Principal */}
      <div style={{ flex: 1, padding: '20px' }}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Dashboard</Navbar.Brand>
          <Nav className="ml-auto">
            <NavDropdown title="Usuario" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#">Cerrar sesión</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>

        {/* Cards de Información */}
        <Container fluid>
          <Row className="mb-4">
            <Col sm={12} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Proyectos Activos</Card.Title>
                  <Card.Text>5 proyectos en curso</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Tareas Pendientes</Card.Title>
                  <Card.Text>12 tareas por completar</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Usuarios Activos</Card.Title>
                  <Card.Text>8 usuarios activos</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Resumen del Proyecto */}
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Resumen del Proyecto</Card.Title>
                  <Card.Text>Detalles y gráficos de los proyectos.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Dashboard
