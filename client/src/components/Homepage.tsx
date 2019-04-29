import * as React from "react";

import {
  createStyles,
  Grid,
  Typography,
  Theme,
  Button,
  withStyles,
  WithStyles
} from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    hompage__background: { padding: "50px" },
    image: {
      backgroundImage:
        "linear-gradient(to right top, #5217ef, #671ced, #7822ea, #8629e8, #9330e6, #a633df, #b738d8, #c43fd2, #d648c6, #e454bc, #ee63b4, #f472ae)"
    },
    img__shopNow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: 660,
      backgroundImage:
        "linear-gradient(to right top, #5217ef, #671ced, #7822ea, #8629e8, #9330e6, #a633df, #b738d8, #c43fd2, #d648c6, #e454bc, #ee63b4, #f472ae)"
    }
  });

interface Props extends WithStyles<typeof styles> {}

class Homepage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        justify="center"
        className={classes.hompage__background}
        xs={12}
        spacing={16}
      >
        <Grid item xs={12}>
          <div className={classes.img__shopNow}>
            <div>
              <div style={{ margin: "80px" }}>
                <Typography variant="h1" color="secondary">
                  DC CONNECT
                </Typography>
                <br />
                <Typography variant="h2" color="secondary">
                  AUTHENTIC SNEAKERS STORE
                </Typography>
              </div>
              <div>
                <Button variant="contained" color="primary" href="/shop">
                  <Typography variant="button" color="secondary">
                    SHOP NOW
                  </Typography>
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ height: 600 }} className={classes.image} />
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid item xs={12} style={{ marginBottom: 8 }}>
            <div style={{ height: 600 / 2 - 8 }} className={classes.image} />
          </Grid>
          <Grid item xs={12} style={{ marginTop: 8 }}>
            <div style={{ height: 600 / 2 - 8 }} className={classes.image} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div style={{ height: 350 }} className={classes.image} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Homepage);
