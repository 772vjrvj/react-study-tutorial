import {ActionType} from "typesafe-actions";
import { BOARD_LIST_FAILURE, BOARD_LIST_SUCCESS } from './actions'
const actions = { BOARD_LIST_FAILURE, BOARD_LIST_SUCCESS }
export type BoardListActionType = ActionType<typeof actions>

