import React, { useState } from "react"
import { scroller } from "react-scroll"

const Accordion = props => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const toggleTab = (index, idSelector) => {
    if (index !== activeIndex) {
      setActiveIndex(index)
      scroller.scrollTo(idSelector, {
        smooth: true,
        duration: 300,
      })
    } else {
      setActiveIndex(-1)
    }
  }

  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      index: index,
      activeIndex: activeIndex,
      toggleTab,
    })
  })
  return (
    <div className="panel-group" id="accordion1">
      {children}
    </div>
  )
}

export default Accordion
