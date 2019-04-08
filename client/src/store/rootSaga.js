import { fork, all } from "redux-saga/effects";
import formSaga from "../client/components/Form/sagas";

function* rootSaga() {
    yield all ([
        fork(formSaga)
    ]);
}

export default rootSaga;
