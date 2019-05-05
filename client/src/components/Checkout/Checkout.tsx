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
  TextField
} from "@material-ui/core";
import Breadcrumbs from "@material-ui/lab/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { User } from "../../types/types";
import SideBar from "./SideBar";

const styles = (theme: Theme) =>
  createStyles({
    wrap: {},
    main: {
      padding: "4em 0",
      paddingLeft: "10%",
      paddingRight: 50
    },
    sidebar: {
      backgroundColor: "#f7f7f7",
      padding: "4em 0",
      paddingLeft: 50,
      paddingRight: "10%"
    },
    textField: {
      marginRight: 20,
      width: "100%"
    }
  });

interface Props extends WithStyles<typeof styles> {}

interface State {
  user: User;
}

class Checkout extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        discount: "",
        payment: {
          card_number: "",
          expDate: "",
          cvv: ""
        },
        shippingAddres: {
          address: "",
          suburb: "",
          state: "",
          postcodes: ""
        }
      }
    };
  }

  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: any = e.target;

    const { user } = this.state;
    user[name] = value;
    this.setState({ user });
  };

  handleOnChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: any = e.target;

    const { user } = this.state;
    user.shippingAddres[name] = value;
    this.setState({ user });
  };

  render() {
    const { classes } = this.props;
    const {
      email,
      firstName,
      lastName,
      shippingAddres,
      phone,
      discount
    } = this.state.user;
    const { address, suburb, state, postcodes } = shippingAddres;
    return (
      <Grid container>
        <Grid item xs={7} className={classes.main}>
          <Grid xs={12}>
            <Link underline="none" href="/">
              <Typography>DC Connect</Typography>
            </Link>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="Breadcrumb"
            >
              <Link color="inherit" href="/cart">
                Cart
              </Link>
              <Link color="primary" href="/checkout/information">
                Information
              </Link>
              <Link color="inherit" href="/checkout/shipping">
                Shipping
              </Link>
              <Link color="inherit" href="/checkout/payment">
                Payment
              </Link>
            </Breadcrumbs>
          </Grid>
          <Grid item container xs={12} style={{ textAlign: "center" }}>
            <Grid item container xs={12} direction="row">
              <Grid item xs={12}>
                <Typography>Express Checkout</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>PAYPAL</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography>OR</Typography>
          </Grid>
          <Grid container xs={12}>
            {/* <Grid container spacing={16}>
              
            </Grid> */}
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <Typography align="left">Contact information</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  className={classes.textField}
                  name="email"
                  value={email}
                  onChange={this.handleOnChange}
                  variant="outlined"
                  label="Email"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography align="left">Shipping address</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  className={classes.textField}
                  name="firstName"
                  value={firstName}
                  onChange={this.handleOnChange}
                  variant="outlined"
                  label="First name"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  className={classes.textField}
                  name="lastName"
                  value={lastName}
                  onChange={this.handleOnChange}
                  variant="outlined"
                  label="Last name"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  className={classes.textField}
                  name="address"
                  value={address}
                  onChange={this.handleOnChangeAddress}
                  variant="outlined"
                  label="Address"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  className={classes.textField}
                  name="suburb"
                  value={suburb}
                  onChange={this.handleOnChangeAddress}
                  variant="outlined"
                  label="Suburb/City"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  className={classes.textField}
                  name="state"
                  value={state}
                  onChange={this.handleOnChangeAddress}
                  variant="outlined"
                  label="State"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  className={classes.textField}
                  name="postcodes"
                  value={postcodes}
                  onChange={this.handleOnChangeAddress}
                  variant="outlined"
                  label="Postcode"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  className={classes.textField}
                  name="phone"
                  value={phone}
                  onChange={this.handleOnChange}
                  variant="outlined"
                  label="Phone"
                  margin="normal"
                />
              </Grid>
              <Grid
                container
                item
                xs={12}
                justify="space-between"
                alignItems="center"
              >
                <div>
                  <Typography>Return to cart</Typography>
                </div>
                <Button variant="contained" color="primary">
                  <Typography variant="button" color="secondary">
                    Continue to shipping method
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5} className={classes.sidebar}>
          <SideBar
            parentClasses={classes}
            values={{ discount }}
            handleOnChange={this.handleOnChange}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Checkout);
