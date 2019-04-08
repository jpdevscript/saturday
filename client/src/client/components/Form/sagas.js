import { call, put, takeLatest } from "redux-saga/effects";
import { types, fieldTypes } from "./constants";
import { postFormData, fetchFormData, postInputChanges } from "./services";


export function* fetchFormFields({formId}) {
  try {
    const formData = yield call(fetchFormData, formId);
    yield put({ type: types.LOAD_FORM_DATA, formData });

  } catch(e) {
    console.log("error...", e);
  }
}

export function* submitFormData({formData}) {
  try {
    yield call(postFormData, formData);
  } catch(e) {
    console.log("error...", e);
  }
}

export function* logInputChanges({value, id, fieldType}) {
  try {

    if(fieldType === fieldTypes.inputText) {
      yield put({ type: types.HANDLE_TEXT_INPUT, value, id });
    }else if(fieldType === fieldTypes.radioGroup) {
      yield put({ type: types.HANDLE_RADIO_INPUT, value, id });
    }else if(fieldType === fieldTypes.checkboxGroup) {
      yield put({ type: types.HANDLE_CHECKBOX_INPUT, value, id });
    }

    yield call(postInputChanges, value, id, fieldType);
    
  } catch(e) {
    console.log("error...", e);
  }
}


function* formSaga() {
  yield takeLatest(types.GET_FORM_FIELDS, fetchFormFields);
  yield takeLatest(types.HANDLE_SUBMIT_FORMDATA, submitFormData);
  yield takeLatest(types.LOG_INPUT_CHANGES, logInputChanges);
}

export default formSaga;
