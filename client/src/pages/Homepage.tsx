import * as React from "react";

import {
  createStyles,
  Grid,
  Typography,
  Theme,
  Button,
  withStyles,
  WithStyles,
} from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    hompage__background: {},
    button__shopNow: {},
    img__shopNow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 1000,
      height: 500,
      backgroundImage:
        "linear-gradient(to right top, #5217ef, #671ced, #7822ea, #8629e8, #9330e6, #a633df, #b738d8, #c43fd2, #d648c6, #e454bc, #ee63b4, #f472ae)",
    },
  });

interface Props extends WithStyles<typeof styles> {}

class Homepage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center">
        <Grid
          alignItems="center"
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            height: "600px",
          }}
        >
          {/* <div>
            <Button variant="contained" color="primary">
              <Typography variant="button" color="secondary">
                SHOP NOW
              </Typography>
            </Button>
          </div> */}
          <div>
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
                  <Button variant="contained" color="primary">
                    <Typography variant="button" color="secondary">
                      SHOP NOW
                    </Typography>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Homepage);
