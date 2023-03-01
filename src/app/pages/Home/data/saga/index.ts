import { put, call, fork, takeLatest } from 'redux-saga/effects';
import * as Type from '../types';
import * as Api from '../api';
import * as Action from '../actions';

function* fetchPlates(action) {
  const { data } = yield call(Api.fetchPlates, action.page);
  yield put(Action.setPlatesData(data));
}

function* watchFetchPlates() {
  yield takeLatest(Type.FETCH_HOME_PLATE, fetchPlates);
}

export function* homeSaga() {
  yield fork(watchFetchPlates);
}
