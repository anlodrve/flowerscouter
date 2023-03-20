import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//watcher function
function* categoriesSaga () {
    yield takeEvery('GET_CATEGORIES', getCategories)
}

//generator function
function* getCategories() {
    try {
        const categories = yield axios.get(`/api/categories`);
        console.log(categories.data)
        yield put({type:`SET_CATEGORIES`, payload: categories.data })
    } catch (error) {
        console.log('error in getCategories saga', error)
    }
}

export default categoriesSaga; 