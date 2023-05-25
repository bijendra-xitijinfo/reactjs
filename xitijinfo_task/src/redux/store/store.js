import {createStore, applyMiddleware } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { userRouter } from '../user/userRouter';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login', 'user'],
}
const persistedReducer = persistReducer(persistConfig, userRouter );

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);