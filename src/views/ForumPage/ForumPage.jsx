import React from "react";
import { NavLink } from "react-router-dom"
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

const ForumPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="white"
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
      <Parallax filter image={require("assets/img/parallax/landing-bg1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your opinion matters</h1>
              <h4 className={classes.title3}>
                Fill this form and our team will reach out to you.
                <br />
                Thanks for your visit!
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} style={{width: "100 !important"}}>
          <GridContainer justify="center">
            <GridItem cs={12} sm={12} md={8}>
              <br />
              <form>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Full name"
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <CustomInput
                    labelText="State your problem, doubt, suggestion"
                    id="message"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.textArea
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                  <GridItem xs={12} sm={12} md={4}>
                    <NavLink to="/">
                      <Button color="primary">Send</Button>
                    </NavLink>
                  </GridItem>
                </GridContainer>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ForumPage;