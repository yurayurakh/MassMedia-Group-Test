import { all, fork } from 'redux-saga/effects'
import notes from './notes/'

function* Saga() {
    yield all([
        fork(notes),
    ]);
}

export default Saga;
