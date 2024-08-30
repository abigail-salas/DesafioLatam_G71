import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container className="mt-5 text-white">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h4>404</h4>

          <p>Página no encontrada</p>

          <div className="d-grid gap-2 mt-5">
            <Button variant="secondary" size="lg" to="/" as={Link}>
              Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
