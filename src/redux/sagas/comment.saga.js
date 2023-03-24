import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* commentSaga () {
    // yield takeEvery('GET_COMMENTS', getComments)
    yield takeEvery('POST_COMMENT', postComment)
    // yield takeEvery('DELETE_COMMENT', deleteComment)

}

// function* getComments(action){
//     console.log('action.payload', action.payload.postId)
//     console.log('action', action.payload)
//     try {
//         const comments = yield axios.get(`/api/comment/${action.payload}`);
//         yield put({type:`SET_COMMENTS`, payload: comments.data });
//     } catch (error) {
//         console.log('error in get comment saga', error)
//     }
// }

function* postComment(action){
    try {
        console.log(action.payload)
        yield axios.post(`/api/comment`, {payload: action.payload});
        yield put({type:'GET_SPOTS'});
    } catch (error) {
        console.log("Error in post comment in saga:", error);
    }
}


export default commentSaga; 