import * as React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  Grid,
  Typography,
  Button,
  Link,
  TextField,
  List,
  ListItem,
  Divider
} from "@material-ui/core";
import { connect } from "react-redux";
import { ItemStructure } from "../../types/types";
import { ApplicationState } from "../../reducers";

const styles = (theme: Theme) =>
  createStyles({
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
    divider: {
      width: "100%"
    },
    parent_grid: {
      padding: "10px 0"
    },
    grid_price_style: {
      padding: "5px 0"
    }
  });

interface Props extends WithStyles<typeof styles> {
  parentClasses: any;
  values: {
    discount: string;
  };
  purchasedItem: ItemStructure[];
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class SideBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { parentClasses, classes, purchasedItem, values } = this.props;
    const { discount } = values;
    return (
      <Grid container>
        <Grid item xs={12} className={classes.parent_grid}>
          <List>
            {purchasedItem.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <Grid container justify="space-between">
                    <Grid item xs={3}>
                      <div
                        style={{
                          height: "100%",
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL
                          }/sneaker${item.img}.png)`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center"
                        }}
                      />
                    </Grid>
                    <Grid item className={classes.grid_box} xs={9}>
                      <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                        style={{ marginTop: 8 }}
                      >
                        <Grid>
                          <Typography
                            variant="body1"
                            color="default"
                            className={classes.title}
                          >
                            {item.name} {item.brand.toUpperCase()}{" "}
                            {item.color.toUpperCase()}
                          </Typography>
                          <Typography variant="body1" color="default">
                            8
                          </Typography>
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
        </Grid>
        <br />
        <Divider className={classes.divider} />
        <Grid
          container
          item
          xs={12}
          direction="row"
          alignItems="center"
          className={classes.parent_grid}
        >
          <Grid item xs={8}>
            <TextField
              className={parentClasses.textField}
              name="discount"
              value={discount}
              onChange={this.props.handleOnChange}
              variant="outlined"
              label="Discount code"
              margin="normal"
            />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="inherit">
              Apply
            </Button>
          </Grid>
        </Grid>
        <br />
        <Divider className={classes.divider} />
        <Grid
          container
          item
          xs={12}
          justify="space-between"
          alignItems="center"
          className={classes.parent_grid}
        >
          <Grid
            item
            container
            justify="space-between"
            alignItems="center"
            className={classes.grid_price_style}
          >
            <div>
              <Typography>Subtotal</Typography>
            </div>
            <div>
              <Typography>$140.00</Typography>
            </div>
          </Grid>
          <Grid
            item
            container
            justify="space-between"
            alignItems="center"
            className={classes.grid_price_style}
          >
            <div>
              <Typography>Shipping</Typography>
            </div>
            <div>
              <Typography>Calculated at next step</Typography>
            </div>
          </Grid>
        </Grid>
        <br />
        <Divider className={classes.divider} />
        <Grid
          container
          item
          xs={12}
          justify="space-between"
          alignItems="center"
          className={classes.parent_grid}
        >
          <Grid item className={classes.grid_price_style}>
            <Typography>Total</Typography>
          </Grid>
          <Grid item className={classes.grid_price_style}>
            <Typography variant="h5">$140.00</Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  purchasedItem: state.cart.purchasedItem
});

export default withStyles(styles)(connect(mapStateToProps)(SideBar));
