import React, { Component }                  from 'react';
import {Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

class FormPassword extends Component {

  render() {
    return (
      <Form className="mt-5">
        <FormGroup row>
          <Label for="inputPassword" sm={2} className="font-weight-bold">Password</Label>
          <Col sm={10}>
            <Input
              type="text"
              name="password"
              id="inputPassword"
              placeholder="Enter Password you want to encrypt" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 8, offset: 2 }}>
            <Button color="info" size="lg">Encrypt</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }

}

export default FormPassword;