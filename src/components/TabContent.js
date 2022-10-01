import React from "react"
// import { CSSTransition } from "react-transition-group";

export default function TabContent({ children, open }) {
  let className = "panel-collapse collapse"
  if (open) {
    className += " in"
  }
  return (
    <div className={className}>
      <div
        className="panel-body"
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </div>
  )
}
