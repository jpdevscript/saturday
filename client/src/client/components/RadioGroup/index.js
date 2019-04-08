import React from 'react';

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
    let divClass = 'radio', labelClass = 'form-label', dataToggle = 'radio';
    if (length === 2) {
      divClass = 'btn-group';
      labelClass = 'form-btn btn';
      dataToggle = 'buttons';
    }

    return choices.map(choice => {
      let activeClass = (selectedOption === choice.value && length === 2) ? 'btn-active' : '';
      return (
        <div className={divClass} data-toggle={dataToggle} key= {choice.id}>
            <label className={`${activeClass} ${labelClass}`}>
              {renderChoice(choice)}
              {choice.label}
            </label>
        </div>
      )
    })
  }


  const radioData = props.fieldData;
  return (
    <div className="form-group">
      <label htmlFor={radioData.label} className="form-label">{radioData.label}</label>
      <div>
        {renderChoices(radioData.choices)}
      </div>
    </div>
  )
}

export default RadioGroup;
