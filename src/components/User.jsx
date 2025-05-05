import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Card, Nav } from 'react-bootstrap';
import './Admin.css'; // Puedes usar el mismo CSS

export default function User() {
  const [proyectos, setProyectos] = useState([]);

  // Cargar proyectos guardados en localStorage
  useEffect(() => {
    const proyectosGuardados = JSON.parse(localStorage.getItem('proyectos'));
    if (proyectosGuardados) {
      setProyectos(proyectosGuardados);
    }
  }, []);

  return (
    <Container fluid className="admin-page-container">
      <Row>

        {/* Menú Lateral */}
        <Col md={2} className="sidebar bg-dark text-white p-3">
          <h4 className="text-center mb-4">Menú</h4>
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-white">Dashboard</Nav.Link>
            <Nav.Link href="#" className="text-white">Configuraciones</Nav.Link>
            <Nav.Link href="#" className="text-danger mt-4">Cerrar Sesión</Nav.Link>
          </Nav>
        </Col>

        {/* Contenido Principal */}
        <Col md={10} className="admin-content p-4">
          <Card className="admin-card shadow-sm">
            <Card.Body>
              <h2>Bienvenido Usuario</h2>

              {/* Lista de Proyectos */}
              <h3 className="mt-4">Lista de Proyectos:</h3>
              <ListGroup>
                {proyectos.length > 0 ? (
                  proyectos.map((proyecto, index) => (
                    <ListGroup.Item key={index}>
                      {proyecto}
                    </ListGroup.Item>
                  ))
                ) : (
                  <p>No hay proyectos disponibles.</p>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}