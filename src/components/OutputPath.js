import React from 'react';
import PropTypes from 'prop-types';
import BottonCopy from './BottonCopy';

const OutputPath = ({ path }) => (
  <div className="output-path-wrapper">
    <div className="output-path">
      <input
        className="path"
        value={path}
        readOnly="true"
      />
      <BottonCopy text={path} />
    </div>
  </div>
);
OutputPath.propTypes = {
  path: PropTypes.string.isRequired,
};

export default OutputPath;
