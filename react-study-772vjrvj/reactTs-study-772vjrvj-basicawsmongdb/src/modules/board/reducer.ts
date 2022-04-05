import {createReducer} from 'typesafe-actions';
import {Board, BoardsActionType} from './types';
import {ONE_BOARD_SUCCESS, ONE_BOARD_FAILURE, ONE_BOARD} from './actions';

import createRequestSaga from '../../lib/createRequestSaga';
import * as boardsAPI from '../../lib/api/board';
import { takeLatest } from 'redux-saga/effects';

const boardSaga = createRequestSaga(ONE_BOARD, boardsAPI.oneBoard);
export function* boardsSagaFn() {
    yield takeLatest(ONE_BOARD, boardSaga);
}

const initialState =
    {
        name: '',
        content: '',
        password: '',
        id: '',
        date: ''
    };

const borad = createReducer<Board, BoardsActionType>(initialState, {
        [ONE_BOARD_SUCCESS]: (state, { payload }) => payload,
        [ONE_BOARD_FAILURE]: (state, { error }) => error,
});

export default borad;
