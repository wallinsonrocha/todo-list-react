import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import listReducer from './reducers/todoListSlice';

const rootReducer = combineReducers({
       todo: listReducer 
});

const persistConfig = {
    key: 'root',
    storage
}

const pReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: pReducer
})

export const persistor = persistStore(store);
export default store