import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";

const configureStore = (rootReducer, saga, initialState) => {

    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [
        sagaMiddleware
    ];

    const isNotProduction = process.env.NODE_ENV !== "production";

    const composeEnhancers = (isNotProduction && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares,

        ))
    );

    sagaMiddleware.run(saga);
    return store;
};

export default configureStore;
