import React              from 'react';
import Container          from 'react-bootstrap/Container';
import FormPassword       from './components/FormPassword';
import TablePassEncrypted from './components/TablePassEncrypted';

const Home = (props) => {
  return (
    <Container className="mt-5">
      <div className="card">
        <div className="card-body">
          <p className="lead">This is some text within a card body.</p>
          <FormPassword
            passToEncrypt={props.passToEncrypt}
            setPassToEncrypt={props.setPassToEncrypt}
          />
        </div>
      </div>
    </Container>
  );
}

export default Home;