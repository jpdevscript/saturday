import { types } from './constants';
import createReducer from "../../../utils/createReducer";

const Immutable = require("seamless-immutable").static;

const initialState = Immutable.from({
    formData: {}
});

const loadFormData = (state, { formData }) => {
  return Immutable.merge (state, formData);;
}


const updateFieldsCollections = (fieldsCollections, value, fieldId, fieldType) => {
  let fields = [...fieldsCollections];
  const findField = fields.find(field => field.id === fieldId);

  let updatedField;
  if (fieldType === "radioGroupType") {
    updatedField =  {...findField, selectedOption: value};
  } else if(fieldType === "inputTextType") {
    updatedField =  {...findField, inputValue: value};
  }

  const foundFieldIndex = fields.findIndex(field => field.id === fieldId);
  fields[foundFieldIndex] = updatedField;
  return fields;
}


const handleTextInputValue = (state, { value, id }) => {
  return Immutable.update(state, "fieldsCollections", updateFieldsCollections, value, id, "inputTextType");
}

const handleRadioInputValue = (state, { value, id }) => {
  return Immutable.update(state, "fieldsCollections", updateFieldsCollections, value, id, "radioGroupType");
}

const handleCheckboxValue = (state, { value, id}) => {
  return Immutable.update(state, "fieldsCollections", fieldsCollections  => {
    let fields = [...fieldsCollections];
    const findField = fields.find(field => field.id === id);
    const newSelection = value;
    const selectedCheckBoxOption = findField.selectedCheckBoxOption;
    let newSelectionArray;
    if(selectedCheckBoxOption.indexOf(newSelection) > -1) {
      newSelectionArray = selectedCheckBoxOption.filter(s => s!== newSelection);
    } else {
      newSelectionArray = [...selectedCheckBoxOption, newSelection];
    }
    const updatedField = {...findField, selectedCheckBoxOption: [...newSelectionArray]};
    const foundFieldIndex = fields.findIndex(field => field.id === id);
    fields[foundFieldIndex] = updatedField;
    return fields;
  });
}


const handlers = {
  [types.LOAD_FORM_DATA]: loadFormData,
  [types.HANDLE_TEXT_INPUT]: handleTextInputValue,
  [types.HANDLE_RADIO_INPUT]: handleRadioInputValue,
  [types.HANDLE_CHECKBOX_INPUT]: handleCheckboxValue
}

export default createReducer(initialState, handlers);
