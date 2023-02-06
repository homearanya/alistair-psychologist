import React, { useRef, useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"

import MenuItems from "./MenuItems"

// import { transformSubMenu } from "../../assets/utils/helpers";

const StyledSubMenu = styled.ul`
  &&& {
    text-align: center;
    list-style: none;
    margin: -5px 0 0 0;
    padding: 0 0 0 10px;
    min-width: 220px;
    opacity: 1;
    display: block;
    top: 100%;
  }

  @media (min-width: 992px) {
    &&& {
      z-index: 50;
      background-color: #ffffff;
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
      padding: 10px 0 10px;
      margin-top: ${props => (props.$isSticky ? undefined : undefined)};
      position: absolute;
      top: ${props => (props.depthLevel > 0 ? "0" : undefined)};
      left: ${props => (props.moveLeft ? "auto" : undefined)};
      right: ${props => (props.moveLeft ? "100%" : undefined)};
    }
  }
`

const SubMenu = props => {
  const [moveLeft, setMoveLeft] = useState(false)
  const [subMenuWidth, setSubMenuWidth] = useState(0)
  const subMenuRef = useRef(null)

  useEffect(() => {
    if (props.viewPortWidth < 992) return
    if (subMenuRef?.current) {
      const subMenu = subMenuRef.current
      const subMenuDimensions = subMenu.getBoundingClientRect()
      if (
        Math.round(subMenuDimensions.width * 100) / 100 ===
        Math.round(subMenuWidth * 100) / 100
      ) {
        return
      }
      if (moveLeft) {
        setMoveLeft(false)
        return
      }
      if (subMenuDimensions.right > props.viewPortWidth) {
        setMoveLeft(true)
      } else {
        setMoveLeft(false)
      }
      setSubMenuWidth(subMenuDimensions.width)
    }
  }, [props.viewPortWidth, moveLeft, subMenuWidth])

  const subMenuItems = props.subMenu ? props.subMenu.subMenuItems : null

  return (
    <React.Fragment>
      <CSSTransition
        in={true}
        classNames="fade-dropdown-menu"
        timeout={300}
        unmountOnExit
      >
        <StyledSubMenu
          $isSticky={props.isSticky}
          depthLevel={props.depthLevel}
          moveLeft={props.moveLeft}
          ref={props.passedRef}
        >
          <MenuItems
            menuItems={subMenuItems}
            showSubMenu={props.showSubMenu}
            viewPortWidth={props.viewPortWidth}
            handleLeave={props.handleLeave}
            handleHover={props.handleHover}
            handleClick={props.handleClick}
            hideSubMenu={props.hideSubMenu}
            isSticky={props.isSticky}
            depthLevel={props.depthLevel}
            moveLeft={moveLeft}
            subMenuRef={subMenuRef}
          />
        </StyledSubMenu>
      </CSSTransition>
    </React.Fragment>
  )
}

export default SubMenu
