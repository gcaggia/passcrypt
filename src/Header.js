import React from 'react';
import { Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <div className = "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h3 className = "ml-lg-5 my-0 mr-md-auto font-weight-normal" > Passcrypt </h3>
      { /*<Header/>*/ }
      <Nav className = "mr-lg-5 my-2 my-md-0" >
      <a className = "p-3 text-dark" href = "#" > Generate Password </a>
      <a className = "p-3 text-dark" href = "#" > Encrypt </a>
      </Nav>
    </div>
  );
};

export default Header;