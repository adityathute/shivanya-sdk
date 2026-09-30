import type { ReactElement, ReactNode } from "react";
import type { MouseEvent, TouchEvent } from "react";

export type ClickAwayMouseEvent =
  | "mousedown"
  | "mouseup"
  | "click"
  | null;

export type ClickAwayTouchEvent =
  | "touchstart"
  | "touchend"
  | null;

export type ClickAwayListenerState =
  | "default"
  | "active"
  | "inactive"
  | "disabled";

export interface ClickAwayListenerProps {
  children?: ReactElement | ReactNode;
  className?: string;
  state?: ClickAwayListenerState;
  disabled?: boolean;
  mouseEvent?: ClickAwayMouseEvent;
  touchEvent?: ClickAwayTouchEvent;
  onClickAway?: (
    event: MouseEvent<Document> | TouchEvent<Document>
  ) => void;
}
