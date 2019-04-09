import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function RadioGroup(props) {

  const renderChoice = (choice) => {
    const selectedOption = props.fieldData.selectedOption;
    const radioGroupId = props.fieldData.id;
    return (
      <input
        type="radio"
        value= {choice.value}
        checked={selectedOption === choice.value}
        onChange={(e) => props.handleChange(e, radioGroupId)}

      />
    )
  }

  const renderChoices = (choices) => {

    const length = choices.length;
    const selectedOption = props.fieldData.selectedOption;
    let divClass = 'radio-group', labelClass = 'radio-btn';
    if (length === 2) {
      divClass = 'ctm-radio-group';
      labelClass = 'ctm-btn';
    }

    return (
      <div className={divClass} >
          {choices.map(choice => {
            let activeClass = (selectedOption === choice.value && length === 2) ? 'ctm-btn-active' : '';
            return (
              <label className={`${activeClass} ${labelClass}`}  key= {choice.id}>

                {renderChoice(choice)}
                {choice.label}
              </label>
            )
          })}
      </div>
    )
  }


  const radioData = props.fieldData;
  return (
    <div>
      <label htmlFor={radioData.label} className="form-label">{radioData.label}</label>
      <div>
        {renderChoices(radioData.choices)}
      </div>
    </div>
  )
}

RadioGroup.propTypes = {
  fieldData: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    subType: PropTypes.string,
    label: PropTypes.string,
    inputValue: PropTypes.string,
    choices: PropTypes.array
  })
}

export default RadioGroup;
