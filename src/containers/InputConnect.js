import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';

const inputConnect = ({ name, value, storeName, onChangeValue }) => {
  const onChange = (e) => {
    onChangeValue(e.target.value);
  };
  return (
    <Input
      name={name}
      value={value}
      onChange={onChange}
      storeName={storeName}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.container][ownProps.storeName],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeValue: (value) => {
    dispatch(ownProps.action(value));
  },
});

const InputConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(inputConnect);

inputConnect.propTypes = {
  name: PropTypes.string.isRequired,
  storeName: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};

export default InputConnect;
