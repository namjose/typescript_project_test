import * as React from "react";
import {
  Button,
  createStyles,
  Grid,
  Typography,
  Theme,
  withStyles,
  WithStyles,
  Link
} from "@material-ui/core";
import QuickView from "./QuickView";
import { ItemStructure } from "../../types/types";

/*redux*/
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addCart, toggleCart } from "../../actionCreators/cartActions";

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
  item: ItemStructure;
  handleAddCart: typeof addCart;
}

interface State {
  isHovered: boolean;
  isHidden: boolean;
}

class ItemCard extends React.Component<Props, State> {
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
    const { classes, item } = this.props;
    const { id, name, color, brand, gender, price, discount, img } = item;
    const price_discount = price * discount;
    const { isHovered, isHidden } = this.state;
    return (
      <React.Fragment>
        <div
          style={{
            height: 300,
            backgroundImage: `url(${process.env.PUBLIC_URL}/sneaker${img}.png)`,
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
            <Link underline="none" href={`/products/${id}`}>
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
            item={item}
            popUp_view={this.popUp_view}
            handleAddCart={this.props.handleAddCart}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleAddCart(item: ItemStructure) {
    dispatch(addCart(item));
    dispatch(toggleCart());
  }
});

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(ItemCard)
);
