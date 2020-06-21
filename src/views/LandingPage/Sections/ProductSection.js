import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Games, SportsEsports, Forum } from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What we offer...</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Gaming consoles"
              description="Exercitation dolor dolor reprehenderit dolore. Pariatur cillum exercitation labore cillum ipsum reprehenderit tempor aute eiusmod quis consectetur. Elit labore eu irure elit ullamco irure est ullamco consectetur reprehenderit anim minim."
              icon={Games}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Video games"
              description="Commodo laboris magna aliqua Lorem laboris fugiat id est officia nisi magna. Qui eiusmod reprehenderit consectetur officia enim do et pariatur incididunt anim. Minim ut ullamco exercitation duis deserunt enim eiusmod eu occaecat cupidatat esse officia in dolor."
              icon={SportsEsports}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Contact"
              description="Reprehenderit do deserunt ut excepteur dolor dolor exercitation do. Incididunt minim sint laboris consectetur commodo ea. Laborum voluptate id consectetur tempor anim elit officia ad nostrud eu laboris. Tempor fugiat excepteur incididunt sunt nisi consequat pariatur."
              icon={Forum}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
