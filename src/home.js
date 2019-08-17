import React     from 'react';
import Container from 'react-bootstrap/Container';
import FormPassword from './components/FormPassword';

const Home = () => {
  return (
    <Container className="mt-5">
      <div className="card">
        <div className="card-body">
          <p className="lead">This is some text within a card body.</p>
          <FormPassword />
        </div>
      </div>
    </Container>
  );
}

export default Home;