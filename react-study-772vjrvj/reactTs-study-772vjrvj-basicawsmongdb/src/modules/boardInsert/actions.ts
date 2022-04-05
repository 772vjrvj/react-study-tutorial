import { createAction } from "typesafe-actions";
import {createRequestActionTypes} from "../../lib/createRequestSaga";
import {Board} from "../board";

export type changeValue = {
    key: string;
    value: string;
}

export const [
    INSERT_BOARD,
    INSERT_BOARD_SUCCESS,
    INSERT_BOARD_FAILURE,
] = createRequestActionTypes('boards/BOARD_INSERT');
export const CHANGE_FIELD = 'boards/CHANGE_FIELD'; // 특정 key 값 바꾸기

export const [
    UPDATE_BOARD,
    UPDATE_BOARD_SUCCESS,
    UPDATE_BOARD_FAILURE,
] = createRequestActionTypes('boards/UPDATE_BOARD');

export const insertBoardAction = createAction(INSERT_BOARD)<Board>();
export const updateBoardAction = createAction(UPDATE_BOARD)<Board>();
export const changeField = createAction(CHANGE_FIELD)<changeValue>();
