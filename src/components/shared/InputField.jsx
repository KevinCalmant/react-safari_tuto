import React from 'react';
import PropTypes from 'prop-types';

const errorMessageStyle = {
  color: 'red',
  fontSize: '12px',
};

const inputErrorStyle = {
  borderColor: 'red',
  boxShadow: '0 0 0 0.2rem red',
};

const InputField = ({ label, value, name, type, inputsHandler, error, required }) => (
  <>
    {label ? <label htmlFor={name}>{label}</label> : <></>}
    <input
      name={name}
      type={type}
      className="form-control"
      value={value}
      onChange={inputsHandler}
      required={required}
      style={error ? inputErrorStyle : null}
    />
    {error ? <span style={errorMessageStyle}>{error}</span> : <></>}
  </>
);

InputField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputsHandler: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};

InputField.defaultProps = {
  label: null,
  error: null,
  required: false,
};

export default InputField;
