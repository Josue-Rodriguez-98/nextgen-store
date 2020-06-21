/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

const Footer = (props) => {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.right}>
          <a
            href="https://github.com/Josue-Rodriguez-98"
            className={aClasses}
            target="_blank"
          >
            Josué Rodríguez
          </a>{" "}
          , 2020
        </div>
      </div>
    </footer>
  );
}

export default Footer;

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
