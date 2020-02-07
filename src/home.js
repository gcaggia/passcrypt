import React              from 'react';
import Container          from 'react-bootstrap/Container';
import Row                from 'react-bootstrap/Row';
import Col                from 'react-bootstrap/Col';
import FormPassword       from './components/FormPassword';
import TablePassEncrypted from './components/TablePassEncrypted';

const Home = (props) => {
  return (
    <Container className="mt-5">
      <div className="card">
        <div className="card-body">
          <Row>
            <Col sm={{ span: 10, offset: 1 }}>
              <p className="lead text-center text-info">Use this application to encrypt a password and see
                the results with different encryption algorithms.
              </p>
              <FormPassword
                passToEncrypt={props.passToEncrypt}
                setPassToEncrypt={props.setPassToEncrypt}
              />
            </Col>
          </Row>
        </div>
        <div className="m-5">
          <h3 className="text-muted">Results</h3>
          <hr/>
          <TablePassEncrypted
            passToEncrypt={props.passToEncrypt}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;