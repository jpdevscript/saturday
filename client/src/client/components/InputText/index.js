import React from 'react';

function InputText(props) {
  const inputData = props.fieldData;
  const key = inputData.id;

  return (
    <div className="form-group">
       <label htmlFor={inputData.label} className="form-label">{inputData.label}</label>
       <input
        className="form-control"
        id={key}
        type="text"
        value={inputData.inputValue}
        onChange={(e) => props.handleChange(e, key)}
        placeholder={inputData.placeholder}
      />
    </div>
  )
}

export default InputText;
