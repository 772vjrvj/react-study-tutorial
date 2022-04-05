import {createReducer} from 'typesafe-actions';
import {BoardsActionType, insertBoard} from './types';
import {INSERT_BOARD_SUCCESS, INSERT_BOARD_FAILURE, INSERT_BOARD, CHANGE_FIELD, UPDATE_BOARD, UPDATE_BOARD_FAILURE, UPDATE_BOARD_SUCCESS} from './actions';

import createRequestSaga from '../../lib/createRequestSaga';
import * as boardsAPI from '../../lib/api/board';
import { takeLatest } from 'redux-saga/effects';

const boardInsertSaga = createRequestSaga(INSERT_BOARD, boardsAPI.boardInsert);
const boardUpdateSaga = createRequestSaga(UPDATE_BOARD, boardsAPI.boardUpdate);
export function* boardInsertSagaFn() {
    yield takeLatest(INSERT_BOARD, boardInsertSaga);
    yield takeLatest(UPDATE_BOARD, boardUpdateSaga);
}

const initialState: insertBoard =
    {
        name: '',
        content: '',
        password: '',
        id: '',
        date: '',
        board: '',
        boardError: '',
    };

const boradInsert = createReducer<insertBoard, BoardsActionType>(initialState, {
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 key 값을 업데이트
        }),
        [INSERT_BOARD_SUCCESS]: (state, { payload }) => payload,
        [INSERT_BOARD_FAILURE]: (state, { error }) => error,
        [UPDATE_BOARD_SUCCESS]: (state, { payload }) => payload,
        [UPDATE_BOARD_FAILURE]: (state, { error }) => error,
});

export default boradInsert;
