import React from 'react';
import { Nav } from 'react-bootstrap';
import GithubCorner from 'react-github-corner';
import { IconContext } from "react-icons";
import { MdHttps } from 'react-icons/md'

const Header = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-4 px-md-4 mb-3 bg-dark text-white border-bottom shadow-sm ">
      <IconContext.Provider value={{ color: "white", size: "35px" }}>
        <MdHttps />
      </IconContext.Provider>
      <h3 className="ml-3 my-0 mr-md-auto font-weight-normal" > Passcrypt </h3>
      { /*<Header/>*/ }
      <Nav className="mr-lg-5 my-2 my-md-0">
        <a className="text-white" href="https://github.com/gcaggia/passcrypt">Fork me on Github</a>
        <GithubCorner href="https://github.com/gcaggia/passcrypt" />
      </Nav>
    </div>
  );
};

export default Header;