import {createReducer} from 'typesafe-actions';
import {BoardListActionType} from './types';
import {BOARD_LIST_SUCCESS,BOARD_LIST_FAILURE,BOARD_LIST} from './actions';

import createRequestSaga from '../../lib/createRequestSaga';
import * as boardsAPI from '../../lib/api/board';
import { takeLatest } from 'redux-saga/effects';
import {Board, BoardsState} from '../board';

const boardListSaga = createRequestSaga(BOARD_LIST, boardsAPI.boardList);

export function* boardListSagaFn() {
    yield takeLatest(BOARD_LIST, boardListSaga);
}

const initialState : BoardsState  = [];

const boardList = createReducer<BoardsState, BoardListActionType>(initialState, {
        [BOARD_LIST_SUCCESS]: (state, { payload }) => payload,
        [BOARD_LIST_FAILURE]: (state, { error }) => error,
});

export default boardList;
