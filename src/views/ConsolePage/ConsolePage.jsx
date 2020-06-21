import React from "react";
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

import consolesArray from "./Consoles.js";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

const ConsolePage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="NextGen Store"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/parallax/consoles.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Gaming Consoles</h1>
              <h4 className={classes.title3}>
                Browse through our catalog.
                <br />
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} style={{ width: "100 !important" }}>
          <div id="images">
            <GridContainer justify="center">
              {
                consolesArray.map(consola => {
                  console.log(consola.image)
                  return (
                    <GridItem lg={4} xs={12}>
                      <div className={classes.typo}>
                          <h4 className={classes.title2} style={{ color: "black !important" }}>{consola.name}</h4>
                        </div>
                        <img
                          height="auto"
                          width="100%"
                          src={consola.image}
                          alt={consola.name}
                          className={classes.imgRounded + " " + classes.imgFluid}
                        />
                        <h3>{consola.price}</h3>
                    </GridItem>
                  )
                })
              }
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default ConsolePage;