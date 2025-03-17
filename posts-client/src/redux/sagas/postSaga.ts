import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchPosts, setPosts } from '../slices/postSlice';

function* fetchPostsSaga() {
  try {
    const { data } = yield call(axios.get, 'http://localhost:5001/api/posts');
    yield put(setPosts(data));
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

export function* watchFetchPosts() {
  yield takeLatest(fetchPosts.type, fetchPostsSaga);
}
