import {ActionType} from "typesafe-actions";
import { INSERT_BOARD_FAILURE, INSERT_BOARD_SUCCESS, CHANGE_FIELD, INSERT_BOARD } from './actions'
const actions = {INSERT_BOARD_FAILURE, INSERT_BOARD_SUCCESS, CHANGE_FIELD, INSERT_BOARD}
export type BoardsActionType = ActionType<typeof actions>

export type insertBoard = {
    name: string,
    content: string,
    password: string,
    id: string,
    date: string,
    board: string,
    boardError: string,
}
