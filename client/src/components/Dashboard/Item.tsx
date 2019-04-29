import * as React from "react";
import {
  Button,
  createStyles,
  Grid,
  Typography,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import QuickView from "./QuickView";
import ItemStructure from "./ItemStructure";

const styles = (theme: Theme) =>
  createStyles({
    title: {
      fontWeight: "bold"
    },
    button_quickView: {
      marginTop: -57,
      background: "rgba(0, 0, 0, 0.5)",
      position: "relative",
      margin: "0px",
      borderRadius: 5
    },
    title_button: {
      fontWeight: "bold",
      color: "#fff"
    },
    price_box: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start"
    }
  });

interface Props extends WithStyles<typeof styles> {
  keyItem: number;
  item: ItemStructure;
  itemName: string;
}

interface State {
  isHovered: boolean;
  isHidden: boolean;
}

class Item extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state = {
    isHovered: false,
    isHidden: true
  };

  handleHover = (e: React.MouseEvent) => {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  };

  popUp_view = (e: React.MouseEvent) => {
    this.setState(prevState => ({
      isHidden: !prevState.isHovered
    }));
  };

  render() {
    const { classes, keyItem, itemName, item } = this.props;
    const { name, color, brand, gender, price, discount } = item;
    const price_discount = price * discount;
    const { isHovered, isHidden } = this.state;
    let keyPic = 0;
    if (brand.indexOf("nike") > -1) {
      keyPic = 3;
    } else if (brand.indexOf("adidas") > -1) {
      keyPic = (keyItem % 2) + 1;
    } else {
      keyPic = 4;
    }
    return (
      <Grid key={keyItem} item xs={12} sm={6} md={3}>
        <div
          style={{
            height: 300,
            backgroundImage: `url(${
              process.env.PUBLIC_URL
            }/sneaker${keyPic}.png), linear-gradient(to right top, #5217ef, #671ced, #7822ea, #8629e8, #9330e6, #a633df, #b738d8, #c43fd2, #d648c6, #e454bc, #ee63b4, #f472ae)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingTop: 5,
            borderRadius: 5
          }}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        >
          <div
            style={{
              height: 300
            }}
          />
          {isHovered ? (
            <Button
              fullWidth
              variant="contained"
              className={classes.button_quickView}
              onClick={this.popUp_view}
            >
              <Typography variant="body1" className={classes.title_button}>
                + Quick View
              </Typography>
            </Button>
          ) : null}
        </div>
        <div>
          <Typography align="left" variant="h5" className={classes.title}>
            <Link to={`/details/${keyItem}`}>
              {name} - {brand.toUpperCase()}
            </Link>
          </Typography>
          <Typography
            align="left"
            variant="body1"
            className={classes.title}
            style={{ color: "#b5b5b5" }}
          >
            {gender === "male" ? "Mens" : "Womens"}
          </Typography>
          <div className={classes.price_box}>
            <div>
              <Typography
                variant="h6"
                className={classes.title}
                color="primary"
                // style={{ color: "#e62e49" }}
              >
                ${price_discount}.00
              </Typography>
            </div>
            <div style={{ marginLeft: 12 }}>
              <Typography
                variant="h6"
                className={classes.title}
                color="textSecondary"
                style={{ textDecoration: "line-through" }}
              >
                ${price}.00
              </Typography>
            </div>
          </div>
        </div>
        {isHidden ? null : (
          <QuickView
            key={keyItem}
            keyPic={keyPic}
            item={item}
            popUp_view={this.popUp_view}
          />
        )}
      </Grid>
    );
  }
}

export default withStyles(styles)(Item);
