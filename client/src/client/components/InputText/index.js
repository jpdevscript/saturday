import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function InputText(props) {
  const inputData = props.fieldData;
  const key = inputData.id;
  const subType = inputData.subType;
  const textInputClass = (subType === "amount") ? "text-input text-amount-input" : "text-input text-year-input";
  return (
    <div className="ctm-text-input">
       <label htmlFor={inputData.label} className="form-label">{inputData.label}</label>
       <input
        className={textInputClass}
        id={key}
        type="text"
        value={inputData.inputValue}
        onChange={(e) => props.handleChange(e, key)}
        placeholder={inputData.placeholder}
      />
    </div>
  )
}

InputText.propTypes = {
  fieldData: PropTypes.shape({
     id: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired,
     subType: PropTypes.string,
     label: PropTypes.string,
     inputValue: PropTypes.string,
     placeholder: PropTypes.string
   })
}

export default InputText;
