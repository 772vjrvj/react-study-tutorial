import { createAction } from "typesafe-actions";
import {createRequestActionTypes} from "../../lib/createRequestSaga";

export const [
    BOARD_LIST,
    BOARD_LIST_SUCCESS,
    BOARD_LIST_FAILURE,
] = createRequestActionTypes('boards/BOARD_LIST');

export const boardList = createAction(BOARD_LIST)();
