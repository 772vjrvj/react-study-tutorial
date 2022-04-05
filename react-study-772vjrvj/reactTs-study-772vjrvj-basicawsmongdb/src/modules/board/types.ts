import {ActionType} from "typesafe-actions";
import { ONE_BOARD_FAILURE, ONE_BOARD_SUCCESS } from './actions'
const actions = {ONE_BOARD_FAILURE, ONE_BOARD_SUCCESS}
export type BoardsActionType = ActionType<typeof actions>

export type Board = {
    name: string;
    content: string;
    password: string;
    id: string;
    date: string
}

export type BoardsState = Board[];
