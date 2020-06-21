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

import gamesArray from "./Games.js";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

const GamesPage = (props) => {
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
      <Parallax filter image={require("assets/img/parallax/games.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Video Games</h1>
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
        <div className={classes.container}>
          <div id="images">
            <GridContainer justify="center">
              {
                gamesArray.map(game => {
                  console.log(game.image)
                  return (
                    <GridItem lg={4} xs={12}>
                      <div className={classes.typo}>
                        <h4 className={classes.title2} style={{ color: "black !important" }}>{game.name}</h4>
                      </div>
                      <img
                        height="auto"
                        width="100%"
                        src={game.image}
                        alt={game.name}
                        className={classes.imgRounded + " " + classes.imgFluid}
                      />
                      <h3>{game.price}</h3>
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

export default GamesPage;