import React, { Component } from 'react';
import { Table } from 'reactstrap';

class TablePassEncrypted extends Component {

  encryptPassword = () => {
    return this.props.password + ' encrypted';
  }

  render() {
    return(
      <Table hover bordered>
        <thead>
          <tr>
            <th style={{width: '20%'}}>Method</th>
            <th style={{width: '80%'}}>Username</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">Method 1</th>
          <td>{this.encryptPassword()}</td>
        </tr>
        <tr>
          <th scope="row">Method 2</th>
          <td>{this.encryptPassword()}</td>
        </tr>
        <tr>
          <th scope="row">Method 3</th>
          <td>{this.encryptPassword()}</td>
        </tr>
        </tbody>
      </Table>
    );
  }
}

TablePassEncrypted.defaultProps = {
  password: "test"
}

export default TablePassEncrypted;