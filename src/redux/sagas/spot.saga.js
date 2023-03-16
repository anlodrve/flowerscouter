import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* spotSaga () {
    yield takeEvery('GET_SPOTS', getSpots)
    yield takeEvery('POST_SPOT', postSpot)
}

function* getSpots() {
    try {
        const spots = yield axios.get(`/api/spot` );
        yield put({type:`SET_SPOTS`, payload: spots.data })
    } catch (error) {
        console.log('error in getSpots saga', error)
    }
}

function* postSpot(action) {
    try {
        console.log('in post spot')
        console.log(action.payload)
        yield axios.post(`/api/spot`, {payload: action.payload});
        yield put({type: "GET_SPOTS"});
      } catch (error) {
        console.log("Error in post spot in saga:", error);
      }
}


export default spotSaga; 