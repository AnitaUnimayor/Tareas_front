import React, { useState } from 'react';
import { Container, Row, Col, Button, ListGroup, Card, Form, Nav } from 'react-bootstrap';
import './Admin.css'; // Tu archivo de estilos personalizados

export default function Admin() {
  const [proyectos, setProyectos] = useState([]);
  const [nuevoProyecto, setNuevoProyecto] = useState("");

  const agregarProyecto = () => {
    if (nuevoProyecto.trim() !== "") {
      setProyectos([...proyectos, nuevoProyecto]);
      setNuevoProyecto("");
    }
  };

  return (
    <Container fluid className="admin-page-container">
      <Row>

        {/* Menú Lateral */}
        <Col md={2} className="sidebar bg-dark text-white p-3">
          <h4 className="text-center mb-4">Menu</h4>
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-white">Dashboard</Nav.Link>
            <Nav.Link href="#" className="text-white">Usuarios</Nav.Link>
            <Nav.Link href="#" className="text-white">Configuraciones</Nav.Link>
            <Nav.Link href="#" className="text-danger mt-4">Cerrar Sesión</Nav.Link>
          </Nav>
        </Col>

        {/* Contenido Principal */}
        <Col md={10} className="admin-content p-4">
          <Card className="admin-card shadow-sm">
            <Card.Body>
              <h2>Bienvenido Administrador</h2>

              <div className="my-3">
                <Form.Control
                  type="text"
                  className="input-nuevo-proyecto"
                  placeholder="Agregar nuevo proyecto"
                  value={nuevoProyecto}
                  onChange={(e) => setNuevoProyecto(e.target.value)}
                />
                <Button
                  className="mt-2 btn-agregar-proyecto"
                  variant="primary"
                  onClick={agregarProyecto}
                >
                  Agregar Proyecto
                </Button>
              </div>

              {/* Lista de Proyectos */}
              <h3 className="mt-4">Lista de Proyectos:</h3>
              <ListGroup>
                {proyectos.map((proyecto, index) => (
                  <ListGroup.Item key={index}>
                    {proyecto}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
}
