import React, { Component } from 'react';
import { Table } from 'reactstrap';
import crypto from 'crypto';
import uuencode from 'uuencode';

class TablePassEncrypted extends Component {

  encryptKey = 'Passcrypt';

  hashPassword = (hash) => {
    const password = this.props.passToEncrypt;
    if (password.length > 0) {
      return crypto.createHash(hash).update(password).digest("hex");
    }
    return '';
  };

  encryptPassword = (algorithm) => {
    const password = this.props.passToEncrypt;
    if (password.length > 0) {
      let cipher = crypto.createCipher(algorithm, this.encryptKey);
      let crypted = cipher.update(password,'utf8','hex');
      crypted += cipher.final('hex');
      return crypted;
    }
    return '';
  };

  encodeBase64 = () => {
    const password = this.props.passToEncrypt;
    if (password.length > 0) {
      return Buffer.from(password).toString('base64')
    }
    return '';
  };

  decodeBase64 = (data) => {
    return Buffer.from(data, 'base64').toString('ascii');
  };

  uuencodePassword = () => {
    const password = this.props.passToEncrypt;
    if (password.length > 0) {
      return uuencode.encode(password);
    }
    return '';
  };

  render() {
    return(
      <Table hover bordered>
        <thead>
          <tr>
            <th style={{width: '20%'}}>Method</th>
            <th style={{width: '80%'}}>Encrypted</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Clear password</th>
            <td>{this.props.passToEncrypt}</td>
          </tr>
          <tr>
            <th scope="row">Standard Des</th>
            <td>{this.encryptPassword('des')}</td>
          </tr>
          <tr>
            <th scope="row">Md5</th>
            <td>{this.hashPassword('md5')}</td>
          </tr>
          <tr>
            <th scope="row">Sha 1</th>
            <td>{this.hashPassword('sha1')}</td>
          </tr>
          <tr>
            <th scope="row">Sha 256</th>
            <td>{this.hashPassword('sha256')}</td>
          </tr>
          <tr>
            <th scope="row">uuencode</th>
            <td>{this.uuencodePassword()}</td>
          </tr>
          <tr>
            <th scope="row">Base 64</th>
            <td>{this.encodeBase64()}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

TablePassEncrypted.defaultProps = {
  passToEncrypt: "test"
};

export default TablePassEncrypted;