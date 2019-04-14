import * as React from "react";
import * as PropTypes from "prop-types";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  TextField,
  InputBase,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "24px 24px",
      textAlign: "center",
    },
    signup_discount: {
      marginTop: 50,
      padding: "24px 24px",
      backgroundColor: grey[200],
    },
    footerText: {
      fontWeight: "bold",
    },
    borderText: {
      border: "2px solid black",
      padding: "10px 10px",
      width: 200,
      borderRadius: "4px",
    },
    button: {
      margin: theme.spacing.unit,
      padding: "5px 5px",
      fontWeight: "bold",
    },
    inputBase: {
      backgroundColor: theme.palette.common.white,
      width: "300px",
      padding: "5px 5px",
      borderRadius: "4px",
    },
    typo: {
      fontWeight: "bold",
      color: theme.palette.primary.main,
    },
  });

interface Props extends WithStyles<typeof styles> {}

function Footer(props: Props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid
        container
        xs={12}
        className={classes.signup_discount}
        justify="center"
      >
        <Grid item>
          <Typography variant="h3" className={classes.footerText}>
            SIGN UP TO THE DC CONNECT <br /> TO GET 15% DISCOUNT CODE
          </Typography>
          <br />
          <Typography variant="body1" className={classes.footerText}>
            NEW SUBSCRIBERS ONLY
          </Typography>
          <br />
          <Grid container direction="row">
            <InputBase className={classes.inputBase} placeholder="Your email" />
            &nbsp;
            <Button href="/" variant="outlined" color="primary">
              <Typography className={classes.typo} variant="h6">
                SIGN UP
              </Typography>
            </Button>
            {/* <Grid item xs={6}>
              <Typography
                variant="body1"
                classes={{
                  root: classes.borderText,
                  body1: classes.footerText,
                }}
              >
                You will receive a 15% discount code in registered email. The
                code is applied for full priced item and saled item
              </Typography>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={12} className={classes.root}>
        <Grid item xs={2}>
          <Typography variant="body1" className={classes.footerText}>
            © DC CONNECT
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" className={classes.footerText}>
            SHOP
          </Typography>
          <br />
          <Typography variant="body1">Men</Typography>
          <Typography variant="body1">Women</Typography>
          <Typography variant="body1">Youth</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" className={classes.footerText}>
            ABOUT
          </Typography>
          <br />
          <Typography variant="body1">Privacy</Typography>
          <Typography variant="body1">Careers</Typography>
          <Typography variant="body1">Our Story</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" className={classes.footerText}>
            HELP
          </Typography>
          <br />
          <Typography variant="body1">FAQs</Typography>
          <Typography variant="body1">Shipping</Typography>
          <Typography variant="body1">Order Information</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired, //mandatory prop
} as any;

export default withStyles(styles)(Footer);
