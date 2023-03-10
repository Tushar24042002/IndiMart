// import { createStore } from "redux";
// import rootReducers  from "./reducer";
// const store = createStore(rootReducers);
// export default store;




import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)