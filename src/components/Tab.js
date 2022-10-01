import React from "react"
import { useState } from "react"

export default function Tab(props) {
  console.log(props.isOpen)
  const [open, setOpen] = useState(props.isOpen)
  const onToggle = () => setOpen((open) => !open)
  const children = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, {
      open,
      toggleTab: onToggle,
    })
  })
  let className = "panel panel-default"
  if (!open) {
    className += " collapsed"
  }
  console.log(open, className)
  return (
    <div className={className} style={{ margin: "10px 0" }}>
      {children}
    </div>
  )
}
