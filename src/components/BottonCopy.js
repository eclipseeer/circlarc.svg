import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import CopyIcon from './icons/CopyIcon';

const BottonCopy = ({ text }) => (
  <CopyToClipboard text={text} >
    <CopyIcon onClick={this.onClick} />
  </CopyToClipboard>
);

export default BottonCopy;
