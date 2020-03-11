import { takeLatest, put, call, all } from 'redux-saga/effects'
import {PUT_DATA, putData} from "../../actions/notes";

function fetchData () {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
}

function* workerLoadData () {
    const data = yield call(fetchData);
    yield put(putData(data))
}

function* Saga() {
    yield all([
        takeLatest(PUT_DATA, workerLoadData),
    ]);
}

export default Saga;