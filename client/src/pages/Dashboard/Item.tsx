import * as React from "react";
import {
  Button,
  createStyles,
  Grid,
  Typography,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import QuickView from "./QuickView";

const styles = (theme: Theme) =>
  createStyles({
    title: {
      // color: theme.palette.secondary.main,
      fontWeight: "bold",
    },
    button_quickView: {
      marginTop: -50,
      background: "rgba(0, 0, 0, 0.5)",
      position: "relative",
    },
    title_button: {
      fontWeight: "bold",
      color: "#fff",
    },
  });

interface Props extends WithStyles<typeof styles> {
  keyItem: number;
  itemName: string;
  //   itemPrice: number;
  //   itemGender: string;
  //   itemType: string;
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
    isHidden: true,
  };

  handleHover = (e: React.MouseEvent) => {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered,
    }));
  };

  popUp_view = (e: React.MouseEvent) => {
    this.setState(prevState => ({
      isHidden: !prevState.isHovered,
    }));
  };

  render() {
    const { classes, keyItem, itemName } = this.props;
    const data = { keyItem, itemName };
    const { isHovered, isHidden } = this.state;
    return (
      <Grid key={keyItem} item xs={3}>
        <div
          style={{
            height: 300,
            backgroundColor: "#fafafa",
            paddingTop: 5,
          }}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        >
          <div
            style={{
              height: 300,
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
          <Typography align="left" variant="body1" className={classes.title}>
            {itemName} <br />
            {/* {itemPrice} <br />
            {itemGender} <br />
            {itemType} <br /> */}
          </Typography>
        </div>
        {isHidden ? null : (
          <QuickView data={data} popUp_view={this.popUp_view} />
        )}
      </Grid>
    );
  }
}

export default withStyles(styles)(Item);
