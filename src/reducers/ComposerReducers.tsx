import { AnyAction } from "redux";
import { LEFT_TYPE, CENTER_TYPE, RIGHT_TYPE, JUSTIFY_TYPE } from "../actions/ActionTypes";

export function textAlignReducer(initialState = "left", action: AnyAction) {
  switch (action.type) {
    case LEFT_TYPE:
    case CENTER_TYPE:
    case RIGHT_TYPE:
    case JUSTIFY_TYPE:
      return action.payload;
    default:
      return initialState;
  }
}