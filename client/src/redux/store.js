import {createStore , applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middleWares.push(logger)
}

export const store = createStore(rootReducer , applyMiddleware(...middleWares)) ;

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);