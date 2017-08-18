import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'material-ui/Slider';
import Input from '../components/Input';

const inputSlider = ({ name, value, onChangeValue, onChangeValueSlider, storeName }) => {
  const onChange = (e) => {
    onChangeValue(e.target.value);
  };
  return (
    <div className={`input-slider-${storeName}`}>
      <Input name={name} value={value} onChange={onChange} storeName={storeName} />
      <Slider
        className="slider"
        step={5}
        min={-360}
        max={360}
        value={value}
        onChange={onChangeValueSlider}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.container][ownProps.storeName],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeValue: (value) => {
    let val = value;
    if (value > 360) val = 360;
    if (value < -360) val = -360;
    dispatch(ownProps.action(val));
  },
  onChangeValueSlider: (e, value) => {
    dispatch(ownProps.action(value));
  },
});

const InputSlider = connect(
  mapStateToProps,
  mapDispatchToProps,
)(inputSlider);

inputSlider.propTypes = {
  name: PropTypes.string.isRequired,
  storeName: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  onChangeValueSlider: PropTypes.func.isRequired,
};

export default InputSlider;
