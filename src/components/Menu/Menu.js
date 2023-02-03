import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"

import MenuItems from "./MenuItems"

import { processMenu } from "../../assets/utils/helpers"

const windowGlobal = typeof window !== "undefined" && window
const documentElementGlobal =
  typeof document !== "undefined" &&
  document &&
  typeof document.documentElement !== "undefined" &&
  document.documentElement

const Menu = props => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { eq: "/main-menu/" } }) {
        frontmatter {
          menuItems {
            link
            name
            subMenu {
              subMenuItems {
                link
                name
                subMenu {
                  subMenuItems {
                    link
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const { menuItems } = data.markdownRemark.frontmatter
  const [showSubMenu, setShowSubMenu] = useState([])
  const [viewPortWidth, setViewPortWidth] = useState(
    windowGlobal.innerWidth || documentElementGlobal.clientWidth
  )
  processMenu(menuItems, props.currentPageSlug, viewPortWidth)

  const handleHover = (depthLevel, index) => {
    setShowSubMenu(showSubMenu => {
      let updatedArray = showSubMenu.slice(0)
      let subMenuArray = []
      subMenuArray[index] = true
      updatedArray.push(subMenuArray)
      return updatedArray
    })
    if (depthLevel === 0) {
      props.toggleTransform()
    }
  }

  const handleLeave = depthLevel => {
    setShowSubMenu(showSubMenu => {
      let updatedArray = showSubMenu.slice(0)
      updatedArray = updatedArray.slice(0, depthLevel)
      return updatedArray
    })
    if (depthLevel === 0) {
      props.toggleTransform()
    }
  }

  const handleClick = (e, depthLevel, index) => {
    e.stopPropagation()
    setShowSubMenu(showSubMenu => {
      let updatedArray = showSubMenu.slice(0)
      if (updatedArray[depthLevel]) {
        if (updatedArray[depthLevel][index]) {
          updatedArray = updatedArray.slice(0, depthLevel + 1)
          updatedArray[depthLevel][index] = false
        } else {
          updatedArray[depthLevel][index] = true
        }
      } else {
        let subMenuArray = []
        subMenuArray[index] = true
        updatedArray.push(subMenuArray)
      }

      return updatedArray
    })
  }

  const hideSubMenu = e => {
    e.stopPropagation()
    setShowSubMenu([])
    if (props.toggleMenu) {
      props.handleToggleMenu()
    }
  }

  useEffect(() => {
    const updateWindowDimensions = () => {
      setViewPortWidth(
        window.innerWidth || document.documentElement.clientWidth
      )
    }
    updateWindowDimensions()
    window.addEventListener("resize", updateWindowDimensions)
    return () => window.addEventListener("resize", updateWindowDimensions)
  }, [])
  return (
    <div className="col-md-6 text-center">
      <nav className="mainmenu_wrapper">
        <ul className="mainmenu nav sf-menu sf-arrows no-bullets">
          <MenuItems
            menuItems={menuItems}
            showSubMenu={showSubMenu}
            viewPortWidth={viewPortWidth}
            handleLeave={handleLeave}
            handleHover={handleHover}
            handleClick={handleClick}
            hideSubMenu={hideSubMenu}
            isSticky={props.isSticky}
            depthLevel={-1}
          />
        </ul>
      </nav>
    </div>
  )
}

export default Menu
