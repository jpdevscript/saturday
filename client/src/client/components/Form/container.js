import { connect } from 'react-redux';
import Form from './index.js';
import { getFormFields, handleTextInput, handleRadioInput, handleCheckboxInput, handleSubmitForm } from "./actions";


const mapStateToProps = state => {
  return {
    formData: state.formData
  }
}
const mapDispatchToProps = dispatch => ({
  onGetFormFields: id => dispatch(getFormFields(id)),
  onHandleTextInput: (...args) => dispatch(handleTextInput(...args)),
  onHandleRadioInput: (...args) =>  dispatch(handleRadioInput(...args)),
  onHandleCheckboxInput: (...args) => dispatch(handleCheckboxInput(...args)),
  onHandleSubmitForm: (formData) => dispatch(handleSubmitForm(formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
