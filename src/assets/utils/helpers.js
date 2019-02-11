export const processMenu = (menuItems, currentPageSlug, viewPortWidth) => {
  // Activate active tree and transform menu for mobile
  let activeSubMenu = false;
  menuItems.forEach(menuItem => {
    let activeLink = menuItem.link && currentPageSlug === menuItem.link;
    // check for branches
    if (menuItem.subMenu && menuItem.subMenu.subMenuItems.length > 0) {
      let activeSubMenuItems = processMenu(
        menuItem.subMenu.subMenuItems,
        currentPageSlug,
        viewPortWidth
      );
      if (!activeLink && activeSubMenuItems) {
        activeLink = true;
      }
    }
    menuItem.active = activeLink;
    if (!activeSubMenu && activeLink) {
      activeSubMenu = activeLink;
    }
    // transform menu for mobile
    if (
      viewPortWidth < 992 &&
      menuItem.link &&
      menuItem.subMenu &&
      menuItem.subMenu.subMenuItems.length > 0
    ) {
      const newSubMenuItem = {
        name: menuItem.name,
        link: menuItem.link
      };
      menuItem.subMenu.subMenuItems.unshift(newSubMenuItem);
      menuItem.link = null;
    }
  });
  return activeSubMenu;
};

export const transformSubMenu = (subMenuItems, viewPortWidth) => {
  // on mobile menu check if there are linkable menu items which sub menu items.
  // We unlink the menu item and add it to the beginning (unshift) of the sub menu items
  let transformedSubMenu = subMenuItems.slice(0);
  if (viewPortWidth < 992 && subMenuItems.length > 0) {
    transformedSubMenu = subMenuItems.map(subMenuItem => {
      if (
        subMenuItem.link &&
        subMenuItem.subMenu &&
        subMenuItem.subMenu.subMenuItems.length > 0
      ) {
        const newSubMenuItem = {
          name: subMenuItem.name,
          link: subMenuItem.link
        };
        subMenuItem.subMenu.subMenuItems.unshift(newSubMenuItem);
        subMenuItem.link = null;
      }
      return subMenuItem;
    });
  }
  return transformedSubMenu;
};
