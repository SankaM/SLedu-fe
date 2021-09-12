import React from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom'
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";

const AdminSideMenu = () => {
  return (
    <div>
      <Paper className="admin_sideMenu">
        <MenuList>
          <MenuItem component='a' href="/Content/ArticalCreations">
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Write Artical</Typography>
          </MenuItem>
          
          <MenuItem component='a' href="/Content/MakeQuations">
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Make Quations</Typography>
          </MenuItem>
          <MenuItem component='a' href="/Content/ArticalCreations">
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Make Smart Notes</Typography>
          </MenuItem>
          <MenuItem component='a' href="/Content/ArticalCreations">
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Make Tests</Typography>
          </MenuItem>
          
        </MenuList>
      </Paper>
    </div>
  );
};

export default AdminSideMenu;
