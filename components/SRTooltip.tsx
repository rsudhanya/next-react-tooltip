import React from "react";
import {
  Fragment,
  FunctionComponent,
  ReactNode,
  useRef,
  useState,
} from "react";

import styles from "./SRTooltip.module.css";

type TooltipProp = {
  jsxTooltipProps: ReactNode;
  children: ReactNode;
};

const SRTooltip: FunctionComponent<TooltipProp> = (props: TooltipProp) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [tooltipPosition, setTooltipPosition] = useState<number>(0);
  const tooltipParent = useRef(null);

  const showContent = () => {
    if (tooltipParent && tooltipParent.current) {
      const tooltipParentElement: HTMLElement = tooltipParent.current;
      const position = tooltipParentElement.getBoundingClientRect();
      console.log(position);
      setTooltipPosition(Math.round((position.left + position.right) / 2));
    }
    setIsVisible(true);
  };

  const hideContent = () => {
    setIsVisible(false);
  };

  return (
    <Fragment>
      {React.Children.map(props.children, (child, index) => {
        if (React.isValidElement(child)) {
          if (index === 0)
            return React.cloneElement(child, {
              onMouseOver: showContent,
              onMouseLeave: hideContent,
              ref: tooltipParent,
            });
          else return React.cloneElement(child);
        }
        return child;
      })}
      <div
        style={{ left: `${tooltipPosition}px` }}
        className={`${styles.srtooltip} ${
          isVisible
            ? styles.srtooltip_displayBlock
            : styles.srtooltip_displayNone
        }`}
      >
        {props.jsxTooltipProps}
      </div>
    </Fragment>
  );
};

export default SRTooltip;
