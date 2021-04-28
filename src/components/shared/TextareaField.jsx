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

const TextareaField = ({ label, value, name, type, inputsHandler, error, required }) => (
  <>
    {label ? <label htmlFor={name}>{label}</label> : <></>}
    <textarea
      type={type}
      name={name}
      className="form-control"
      rows="6"
      value={value}
      onChange={inputsHandler}
      style={error ? inputErrorStyle : null}
      required={required}
    />
    {error ? <span style={errorMessageStyle}>{error}</span> : <></>}
  </>
);

TextareaField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputsHandler: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};

TextareaField.defaultProps = {
  label: null,
  error: null,
  required: false,
};

export default TextareaField;
