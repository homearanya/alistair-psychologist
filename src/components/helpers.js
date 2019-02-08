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
