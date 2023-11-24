import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';

import { PERSIST, PURGE, REGISTER, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from 'redux/authSlice';
import userReducer from 'redux/userSlice';

import { createWrapper } from 'next-redux-wrapper';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: [],
  whitelist: ['authReducer'],
};

const reducer = combineReducers({
  authReducer,
  userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const makeStore = () =>
  configureStore({
    reducer: { persistedReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [REGISTER, PURGE, PERSIST],
        },
      }),
  });

export const store = makeStore();

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
