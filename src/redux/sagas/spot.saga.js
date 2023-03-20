import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* spotSaga () {
    yield takeEvery('GET_SPOTS', getSpots)
    yield takeEvery('GET_SPOTS_BY_ID', getById)
    yield takeEvery('POST_SPOT', postSpot)
    yield takeEvery('DELETE_SPOT', deleteSpot)
    yield takeEvery('SELECT_SPOT', selectSpot)
    yield takeEvery('UPDATE_SPOT', updateSpot)
}

function* getSpots() {
    try {
        const spots = yield axios.get(`/api/spot` );
        yield put({type:`SET_SPOTS`, payload: spots.data })
    } catch (error) {
        console.log('error in getSpots saga', error)
    }
}

//get all the spots authored by the user 
//action.payload is the user id
function* getById(action){
    try {
        const userSpots = yield axios.get(`/api/spot/user/${action.payload}`);
        yield put({type:`SET_SPOTS_BY_USERID`, payload: userSpots.data });
    } catch (error) {
        console.log('error in getSpots saga', error)
    }
}

// get an individual spot based on spot id 
// action.payload is spot's id
function* selectSpot(action){
    try {
        const spotSelected = yield axios.get(`/api/spot/${action.payload}`);
        console.log(spotSelected.data)
        yield put({type:`SET_CURRENT_SPOT`, payload: spotSelected.data });
    } catch (error) {
        console.log('error in selectSpot saga', error)
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

function* deleteSpot(action) {
    try {
        yield axios.delete(`/api/spot/${action.payload}`)
        yield put({type: 'GET_SPOTS'})
    } catch (error) {
        console.log('error in delete saga', error);
    }
}

function* updateSpot(action) {
    try {
        yield axios.put(`/api/spot/${action.payload.id}`, {
            description: action.payload.description
        }); 
        yield put({ type: 'GET_SPOTS' })
    } catch (error) {
         console.log('error in put saga', error);
    }
}

export default spotSaga; 