import React from 'react';
import {Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

const FormPassword = (props) => {

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('A password was submitted: ');
  // }
  return (
    <Form className="mt-5">
      <FormGroup row>
        <Label for="inputPassword" sm={2} className="font-weight-bold">Password</Label>
        <Col sm={10}>
          <Input
            type="text"
            name="password"
            id="inputPassword"
            placeholder="Enter Password you want to encrypt"
            value={props.passToEncrypt}
            onChange={(e) => props.setPassToEncrypt(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 8, offset: 2 }}>
          <Button type="submit" color="info" size="lg">Encrypt</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default FormPassword;