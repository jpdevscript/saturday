import React from 'react';
import PropTypes from 'prop-types';


function CheckboxGroup(props) {

  const renderOption = (option) => {
    const selectedCheckBoxOption = props.fieldData.selectedCheckBoxOption;
    const checkboxGroupId = props.fieldData.id;
    return (
      <input
        type="checkbox"
        id={option.name}
        name={option.name}
        value= {option.value}
        checked={selectedCheckBoxOption.indexOf(option.value) > -1}
        onChange={(e) => props.handleChange(e, checkboxGroupId)}
      />
    )
  }

  const renderCheckboxOptions = (options) => {
    return options.map(option => {
      return (
        <div className="checkbox" key= {option.id}>
            <label className="form-label">
              {renderOption(option)}
              {option.label}
            </label>
        </div>
      )
    })
  }


  const checkboxData = props.fieldData;
  return (
    <div className="form-group">
      <label htmlFor={checkboxData.label} className="form-label">{checkboxData.label}</label>
      {renderCheckboxOptions(checkboxData.checkboxOptions)}
    </div>
  )
}

CheckboxGroup.propTypes = {
  fieldData: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    checkboxOptions: PropTypes.array,
    selectedCheckBoxOption: PropTypes.array
  })
}

export default CheckboxGroup;
