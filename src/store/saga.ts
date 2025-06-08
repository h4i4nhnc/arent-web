import { homeSaga } from 'app/pages/Home/data/saga';
import { fork } from 'redux-saga/effects';

export function* rootSaga() {
  yield fork(homeSaga);
}
