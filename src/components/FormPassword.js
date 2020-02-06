import React from 'react';
import {Form, FormGroup, Label, Col, Input, Button, InputGroupAddon, InputGroup } from 'reactstrap';
import Pluralize from 'pluralize';

const FormPassword = (props) => {

  return (
    <Form className="mt-5">
      <FormGroup row>
        <Label for="inputPassword" sm={3} className="font-weight-bold">Enter a password</Label>
        <Col sm={9}>
          <InputGroup>
            <Input
              type="text"
              name="password"
              id="inputPassword"
              placeholder="Enter Password you want to encrypt"
              value={props.passToEncrypt}
              onChange={(e) => props.setPassToEncrypt(e.target.value)}
            />
            <InputGroupAddon addonType="append">
              <Button color="secondary">
                { props.passToEncrypt.length + ' ' + Pluralize('character', props.passToEncrypt.length || 1) }
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default FormPassword;