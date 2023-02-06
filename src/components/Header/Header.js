import React, { useState } from "react"
import Sticky from "react-sticky-el"

import Logo from "../Logo"
import Menu from "../Menu"
import Social from "../Social"

import "./header.css"

const Header = props => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [toggleTransform, setToggleTransform] = useState(false)

  const onToggleMenu = () => setToggleMenu(toggleMenu => !toggleMenu)

  const onToggleTransform = () =>
    setToggleTransform(toggleTransform => !toggleTransform)

  const onSetStikcy = () => setSticky(sticky => !sticky)

  let headerClassName =
    "page_header header_white table_section columns_padding_0 toggler-sm-right"
  let menuToggleClassName = "toggle_menu visible-xs visible-sm"
  let stickyStyle = {}

  if (toggleMenu) {
    headerClassName += " mobile-active"
    menuToggleClassName += " mobile-active"
    stickyStyle.transform = "none"
  }

  if (toggleTransform) {
    stickyStyle.transform = "none"
  }

  if (sticky) {
    headerClassName += " sticky-menu"
  }
  return (
    <Sticky onFixedToggle={onSetStikcy} style={stickyStyle}>
      <header className={headerClassName}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Logo isSticky={sticky} toggleMenu={toggleMenu} />
              <span className={menuToggleClassName} onClick={onToggleMenu}>
                <span />
              </span>
            </div>
            <Menu
              isSticky={sticky}
              toggleTransform={onToggleTransform}
              toggleMenu={toggleMenu}
              handleToggleMenu={onToggleMenu}
              currentPageSlug={props.currentPageSlug}
            />
            <Social
              classes="text-right hidden-xs hidden-sm"
              inputColor="#91d0cc"
            />
          </div>
        </div>
      </header>
    </Sticky>
  )
}

export default Header
