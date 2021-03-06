import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';

import { rootReducer } from './reducers/';

const persistConfig = {
    key: 'authType',
    storage: AsyncStorage,
    whitelist: ['auth'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };