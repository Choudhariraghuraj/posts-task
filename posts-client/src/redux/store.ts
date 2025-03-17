import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import postReducer from './slices/postSlice';
import { watchFetchPosts } from './sagas/postSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchPosts);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
