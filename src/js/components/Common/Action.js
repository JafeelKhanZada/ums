import React, { useState } from "react";
import { IconButton, Menu, MenuList } from "@material-ui/core";
import { MoreHorizSharp } from "@material-ui/icons";
function ContactsMultiSelectMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  function openSelectedContactMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function closeSelectedContactsMenu() {
    setAnchorEl(null);
  }

  return (
    <React.Fragment>
      <IconButton
        aria-owns={anchorEl ? "selectedContactsMenu" : null}
        aria-haspopup="true"
        onClick={openSelectedContactMenu}
        style={{ padding: 0 }}
      >
        <MoreHorizSharp />
      </IconButton>
      <Menu
        id="selectedContactsMenu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeSelectedContactsMenu}
      >
        <MenuList>{props.children}</MenuList>
      </Menu>
    </React.Fragment>
  );
}

export default ContactsMultiSelectMenu;
