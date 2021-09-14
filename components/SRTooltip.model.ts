import { ReactNode } from "react";

export interface TooltipProp {
  jsxTooltipProps: ReactNode | string;
  children: ReactNode;
  isHTMLContent: boolean;
}
