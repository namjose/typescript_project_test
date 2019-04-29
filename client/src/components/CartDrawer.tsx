import * as React from "react";
import classNames from "classnames";
import {
  createStyles,
  Grid,
  IconButton,
  InputAdornment,
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
  Icon
} from "@material-ui/core";

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
    icon: {
      margin: theme.spacing.unit * 2
    },
    title: {
      fontWeight: "bold"
    },
    button: {
      width: 280
    }
  });

interface Props extends WithStyles<typeof styles> {}

interface State {
  right: boolean;
}

class CartDrawer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state = {
    right: false
  };

  toggleDrawer = (e: React.MouseEvent) => {
    this.setState(prevState => ({
      right: !prevState.right
    }));
  };

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        {/* <List className={classes.header}>
          <ListItem button key={"Cart"}>
            <ListItemText>
              <Typography variant="h6" color="secondary">
                Cart
              </Typography>
            </ListItemText>
          </ListItem>
        </List> */}
        <Divider />
        <List>
          <ListItem button key={1}>
            <ListItemText primary={"Ultraboost"} />
          </ListItem>
        </List>
      </div>
    );
    return (
      <React.Fragment>
        <IconButton onClick={this.toggleDrawer}>
          <Icon
            className={classNames(classes.icon, "fas fa-shopping-cart")}
            color="secondary"
          />
        </IconButton>
        <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer}
          onOpen={this.toggleDrawer}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            // onKeyDown={this.toggleDrawer}
          >
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
              <ListItem key={1}>
                <Grid container justify="space-evenly">
                  <Grid item>
                    <div
                      style={{ height: 90, width: 50, backgroundColor: "pink" }}
                    />
                  </Grid>
                  <Grid item>
                    <ListItemText>
                      <Typography variant="h6" color="default">
                        ULTRABOOST
                      </Typography>
                      <Typography variant="body1" color="default">
                        8
                      </Typography>
                      <br />
                      <Grid container justify="space-between">
                        <Grid>
                          <Typography variant="body1" color="default">
                            Quantity
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography variant="body1" color="default">
                            $20.00
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem key={"Sub Total"}>
                <Grid container justify="space-between">
                  <Grid>
                    <Typography variant="body1" color="default">
                      Subtotal
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography variant="body1" color="default">
                      $20.00
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
            <Divider />
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
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <Typography variant="button" color="secondary">
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

export default withStyles(styles)(CartDrawer);
