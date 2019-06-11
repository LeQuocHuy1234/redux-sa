import { ADD_PLACE } from '../src/actions/types';
import { put, takeEvery } from 'redux-saga/effects';

export function* sayHello() {
    console.log('hello world !');
}

function* increment() {
    console.log('this is saga increment');
}

export function* watchIncrement() {
    yield takeEvery('ADD_PLACE', increment)
}
