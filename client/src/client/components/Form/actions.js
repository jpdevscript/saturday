import { types, fieldTypes } from './constants';


export const getFormFields = (formId) => {
  return {
    type: types.GET_FORM_FIELDS,
    formId
  }
}

export const handleTextInput = (value, id) => {
  return {
    type: types.LOG_INPUT_CHANGES,
    value,
    id,
    fieldType: fieldTypes.inputText
  }
}

export const handleRadioInput = (value, id) => {
  return {
    type: types.LOG_INPUT_CHANGES,
    value,
    id,
    fieldType: fieldTypes.radioGroup
  }
}

export const handleCheckboxInput = (value, id) => {
  return {
    type: types.LOG_INPUT_CHANGES,
    value,
    id,
    fieldType: fieldTypes.checkboxGroup
  }
}

export const handleSubmitForm = (formData) => {
  return {
    type: types.HANDLE_SUBMIT_FORMDATA,
    formData
  }
}
