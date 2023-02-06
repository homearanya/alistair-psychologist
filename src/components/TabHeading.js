import React from "react"
import DynamicAnchor from "./DynamicAnchor"
import styled from "styled-components"

const StyledAnchor = styled.a`
  &&& {
    font-size: 20px;
    :focus {
      color: #91d0cc;
    }

    :hover {
      cursor: pointer;
      color: #91d0cc;
    }
  }
`

export default function TabHeading({ index, open, toggleTab, heading }) {
  let idSelector = ``
  let className = ""
  if (!open) {
    className += "collapsed"
  }
  return (
    <React.Fragment>
      <DynamicAnchor id={idSelector} />
      <div className="panel-heading">
        <h2 className="panel-title">
          <StyledAnchor
            className={className}
            onClick={() => toggleTab(index, idSelector)}
          >
            {heading}
          </StyledAnchor>
        </h2>
      </div>
    </React.Fragment>
  )
}
