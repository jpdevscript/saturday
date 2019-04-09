import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputText from '../InputText';
import RadioGroup from '../RadioGroup';
import CheckboxGroup from '../CheckboxGroup';
import { fieldTypes } from './constants';
import './index.css';


class Form extends PureComponent {

  componentDidMount() {
    let { formId } = this.props.match.params;
    this.props.onGetFormFields(formId);
  }

  onSubmit = (e, formId) => {
    e.preventDefault();
    this.props.onHandleSubmitForm(this.props.formData);

    if (formId === "form1") {
      this.props.history.push(`/forms/form2`);
    }
  }

  handleInputTextChange = (e, id) => {
    let value = e.target.value;
    this.props.onHandleTextInput(value, id);
  }

  handleRadioInputChange = (e, id) => {
    const value = e.target.value;
    this.props.onHandleRadioInput(value, id);
  }

  handleCheckbox = (e, id) => {
    const newSelection = e.target.value;
    this.props.onHandleCheckboxInput(newSelection, id);
  }

  renderField = (field) => {
    if (field.type === fieldTypes.inputText) {
      return <InputText fieldData={field} handleChange= {(e, id) => this.handleInputTextChange(e, id)}/>;
    } else if (field.type === fieldTypes.radioGroup) {
      return <RadioGroup fieldData={field} handleChange= {(e, radioGroupId) => this.handleRadioInputChange(e, radioGroupId)} />;
    } else if (field.type === fieldTypes.checkboxGroup) {
      return <CheckboxGroup fieldData={field} handleChange={this.handleCheckbox} />
    }
  }
  renderForm = (fields) => {
    try {
      return fields.map(field => {
        return (
          <div key= {`fr${field.id}`} className="form-fields" >
            {this.renderField(field)}
          </div>
        )
      })
    } catch(error) {
      console.log("error...", error)
    }
  }

  render() {
    const _formData = this.props.formData;
    return (
      <form className="form-container col-md-4" htmlFor= {_formData.id} onSubmit={(e)=>{this.onSubmit(e, _formData.id)}}>
        <h2>{_formData.title}</h2>
        {this.renderForm(_formData.fieldsCollections)}
        <button className= "form-btn" type="submit">Continue</button>
      </form>
    );
  }
}

Form.propTypes = {
  formData: PropTypes.object
};

export default Form;
