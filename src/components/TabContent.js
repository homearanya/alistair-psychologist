import React from "react";
// import { CSSTransition } from "react-transition-group";

export default function TabContent(props) {
  let className = "panel-collapse collapse";
  if (props.index === props.activeIndex) {
    className += " in";
  }
  return (
    // <CSSTransition
    //   in={props.index === props.activeIndex}
    //   classNames="slidedown-dropdown-menu"
    //   timeout={300}
    //   unmountOnExit
    // >
    <div className={className}>
      <div className="panel-body">{props.children}</div>
    </div>
    // </CSSTransition>
  );
}
