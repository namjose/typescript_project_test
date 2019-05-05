import * as React from "react";
import classNames from "classnames";
import { Icon } from "@material-ui/core";

interface ArrowProps {
  className?: any;
  style?: any;
  onClick?: any;
}

export function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ display: "block" }}
      onClick={onClick}
    >
      <Icon className={classNames("fas fa-chevron-right")} color="primary" />
    </button>
  );
}
export function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ display: "block" }}
      onClick={onClick}
    >
      <Icon className={classNames("fas fa-chevron-left")} color="primary" />
    </button>
  );
}
