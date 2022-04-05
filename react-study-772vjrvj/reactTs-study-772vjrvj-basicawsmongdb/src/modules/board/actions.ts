import { createAction } from "typesafe-actions";
import {createRequestActionTypes} from "../../lib/createRequestSaga";

export const [
    ONE_BOARD,
    ONE_BOARD_SUCCESS,
    ONE_BOARD_FAILURE,
] = createRequestActionTypes('boards/ONE_BOARD');

export const oneBoard = createAction(ONE_BOARD)<string>();
