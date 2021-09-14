import React from "react";
import { Fragment, FunctionComponent, useRef, useState } from "react";
import { TooltipProp } from "./SRTooltip.model";

import styles from "./SRTooltip.module.css";

const SRTooltip: FunctionComponent<TooltipProp> = (props: TooltipProp) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [tooltipTopPosition, setTooltipTopPosition] = useState<number>(0);
  const tooltipParent = useRef(null);

  const showContent = () => {
    if (tooltipParent && tooltipParent.current) {
      const tooltipParentElement: HTMLElement = tooltipParent.current;
      const position = tooltipParentElement.getBoundingClientRect();
      setTooltipTopPosition(Math.round(position.bottom));
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
        // style={{ top: `${tooltipTopPosition}px` }}
        className={`${styles.srtooltip} ${
          props.isHTMLContent ? "" : styles.srtooltip_text
        } ${
          isVisible
            ? styles.srtooltip_displayBlock
            : styles.srtooltip_displayNone
        }`}
      >
        {!props.isHTMLContent && <span>{props.jsxTooltipProps}</span>}

        {props.isHTMLContent &&
          React.Children.map(props.jsxTooltipProps, (child, index) => {
            if (React.isValidElement(child)) {
              if (index === 0)
                return React.cloneElement(child, {
                  onMouseOver: showContent,
                  onMouseLeave: hideContent,
                });
              else return React.cloneElement(child);
            }
            return child;
          })}
      </div>
    </Fragment>
  );
};

export default SRTooltip;
