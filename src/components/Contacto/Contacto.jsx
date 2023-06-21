import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contacto.scss'; // Archivo de estilos personalizados

function Contacto() {
  return (
    <Container className="contacto-container">
      <Row>
        <Col md={3}>
          <p className="contacto-info">Información de contacto:</p>
          <ul className="contacto-lista">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Col>
        <Col md={5}>
          <Form className="contacto-form">
            <Form.Group>
              <Form.Label className="contacto-label">Label 1</Form.Label>
              <Form.Control type="text" className="contacto-input" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="contacto-label">Label 2</Form.Label>
              <Form.Control type="text" className="contacto-input" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="contacto-label">Label 3</Form.Label>
              <Form.Control type="text" className="contacto-input" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="contacto-label">Label 4</Form.Label>
              <Form.Control type="text" className="contacto-input" />
            </Form.Group>
            <Button variant="primary" className="contacto-button">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;
