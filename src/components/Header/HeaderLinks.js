/*eslint-disable*/
import React from "react";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Games, SportsEsports, Forum } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const HeaderLinks = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink to="/consoles-page">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Games className={classes.icons} /> Consoles
        </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink to="/games-page">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <SportsEsports className={classes.icons} /> Games
        </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink to="/forum-page">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Forum className={classes.icons} /> Contact
          </Button>
        </NavLink>
      </ListItem>
    </List>
  );
}

export default HeaderLinks;
