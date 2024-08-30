import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-5 text-white">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Bienvenido al Home</h1>
          <p>Esta es la página principal de nuestra aplicación.</p>

          <div className="d-grid gap-2">
            <Button variant="dark" size="lg" to="/login" as={Link}>
              Iniciar Sesion
            </Button>
            <Button variant="secondary" size="lg" to="/register" as={Link}>
              Registrarse
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
