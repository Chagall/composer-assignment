import { AnyAction } from "redux";
import {
  LEFT_TYPE,
  CENTER_TYPE,
  RIGHT_TYPE,
  JUSTIFY_TYPE,
} from "./ActionTypes";

export const alignLeftAction = (): AnyAction => {
  return { type: LEFT_TYPE, payload: "left" };
}

export const alignCenterAction = (): AnyAction => {
  return { type: CENTER_TYPE, payload: "center" };
}

export const alignRightAction = (): AnyAction => {
  return { type: RIGHT_TYPE, payload: "right" };
}

export const justifyAction = (): AnyAction => {
  return { type: JUSTIFY_TYPE, payload: "justify" };
}