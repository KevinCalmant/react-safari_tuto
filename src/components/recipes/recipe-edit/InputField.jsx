import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ label, value, name, type, inputsHandler }) => (
  <>
    {label ? <label htmlFor={name}>{label}</label> : <></>}
    <input
      name={name}
      type={type}
      className="form-control"
      value={value}
      onChange={inputsHandler}
    />
  </>
);

InputField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputsHandler: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  label: null,
};

export default InputField;
