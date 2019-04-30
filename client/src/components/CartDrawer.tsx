import * as React from "react";
import classNames from "classnames";
import {
  createStyles,
  Grid,
  IconButton,
  Theme,
  Typography,
  withStyles,
  WithStyles,
  SwipeableDrawer,
  ListItem,
  ListItemText,
  Divider,
  List,
  Button,
  Icon,
  TextField,
  ButtonBase
} from "@material-ui/core";
import { connect } from "react-redux";
import { CartInterface } from "../types/types";
import { AppState } from "../reducers/";
import { Dispatch } from "redux";
import deleteCart from "../actionCreators/deleteCart";
import toggleCart from "../actionCreators/toggleCart";
const styles = (theme: Theme) =>
  createStyles({
    header: {
      backgroundImage:
        "linear-gradient(to left bottom, #5217ef, #671ced, #7822ea, #8629e8, #9330e6, #a633df, #b738d8, #c43fd2, #d648c6, #e454bc, #ee63b4, #f472ae)"
    },
    list: {
      width: 300
    },
    fullList: {
      width: "auto"
    },
    title: {
      fontWeight: "bold"
    },
    button: {
      width: 280
    },
    grid_box: {
      paddingLeft: 20
    },
    quantity_textField: {
      width: 80,
      marginBottom: 0
    },
    remove_button: {
      color: "red"
    },
    cart_icon: {
      fontSize: 21,
      margin: 0
    },
    sub_total_list: {
      backgroundColor: "#f7f7f7"
    }
  });

interface Props extends WithStyles<typeof styles> {
  cart: CartInterface;
  handleDeleteCart: typeof deleteCart;
  handleToggleCart: typeof toggleCart;
}

class CartDrawer extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { classes, cart, handleToggleCart } = this.props;
    const { showCartDrawer, purchasedItem, total } = cart;
    return (
      <React.Fragment>
        <IconButton onClick={handleToggleCart}>
          <Icon
            className={classNames(classes.cart_icon, "fas fa-shopping-cart")}
            color="secondary"
          />
        </IconButton>
        <SwipeableDrawer
          anchor="right"
          open={showCartDrawer}
          onClose={handleToggleCart}
          onOpen={handleToggleCart}
        >
          <div tabIndex={0} role="button" onClick={handleToggleCart}>
            <div className={classes.list}>
              <List className={classes.header}>
                <ListItem button key={"Cart"}>
                  <ListItemText>
                    <Typography variant="h6" color="secondary">
                      SHOPPING CART
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          </div>
          <div className={classes.list}>
            <Divider />
            <List>
              {purchasedItem.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <Grid container justify="space-around">
                      <Grid item xs={3}>
                        <div
                          style={{
                            height: "100%",
                            backgroundColor: "pink"
                          }}
                        />
                      </Grid>
                      <Grid item className={classes.grid_box} xs={9}>
                        <Typography
                          variant="body1"
                          color="default"
                          className={classes.title}
                        >
                          {item.name} {item.brand.toUpperCase()}{" "}
                          {item.color.toUpperCase()}
                        </Typography>
                        <Grid
                          container
                          justify="space-between"
                          style={{ marginTop: 8 }}
                        >
                          <Grid>
                            <Typography variant="body1" color="default">
                              8
                            </Typography>
                          </Grid>
                          <Grid>
                            <ButtonBase
                              style={{ color: "red" }}
                              onClick={() =>
                                this.props.handleDeleteCart(item.id)
                              }
                            >
                              X Remove
                            </ButtonBase>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          justify="space-between"
                          alignItems="center"
                        >
                          <Grid>
                            <TextField
                              className={classes.quantity_textField}
                              id="outlined-number"
                              label="Quantity"
                              type="number"
                              InputLabelProps={{
                                shrink: true
                              }}
                              margin="normal"
                              variant="outlined"
                            />
                          </Grid>
                          <Grid>
                            <Typography variant="body1" color="default">
                              ${item.price * item.discount}.00
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </ListItem>
                );
              })}
            </List>
            <List className={classes.sub_total_list}>
              <ListItem key={"Sub Total"}>
                <Grid container justify="space-between">
                  <Grid>
                    <Typography
                      variant="body1"
                      color="default"
                      className={classes.title}
                    >
                      Subtotal
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography
                      variant="body1"
                      color="default"
                      className={classes.title}
                    >
                      ${total}.00
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
            <br />
            <Grid container direction="column" alignItems="center">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <Typography variant="button" color="secondary">
                  PROCEED TO CHECKOUT
                </Typography>
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={handleToggleCart}
              >
                <Typography variant="button" color="primary">
                  CONTINUE SHOPPING
                </Typography>
              </Button>
            </Grid>
            <br />
            <Divider />
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  cart: state.cart
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleDeleteCart(itemId: string) {
    dispatch(deleteCart(itemId));
  },
  handleToggleCart(newState: CartInterface) {
    dispatch(toggleCart());
  }
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartDrawer)
);
