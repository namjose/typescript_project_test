import * as React from "react";
import {
  createStyles,
  Grid,
  Typography,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import FilterList from "./FilterList";
import Item from "./Item";

const styles = (theme: Theme) =>
  createStyles({
    header1: {
      backgroundColor: "red",
    },
    header2: {
      backgroundColor: grey[200],
    },
    mainView: {
      marginTop: 50,
    },
    gridList: {
      width: "100%",
    },
    title: {
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

interface Props extends WithStyles<typeof styles> {}

interface State {
  user: string;
  list_products: string[];
  isHovered: boolean;
}

let list: string[] = [
  "Ultraboost",
  "EQT",
  "Nike Air Max",
  "Air",
  "A",
  "B",
  "C",
  "D",
];

class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user: "namjose",
      list_products: list,
      isHovered: false,
    };
  }

  handleHover = (e: React.MouseEvent) => {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered,
    }));
  };

  buildCard = function(str: string, index: number): any {
    return <Item keyItem={index} itemName={str} />;
  };

  render() {
    const { isHovered } = this.state;
    const { classes } = this.props;
    console.log(typeof classes);
    return (
      <main>
        <Grid container>
          {/* <Grid justify="center" xs={12} className={classes.header1}>
            <Typography variant="body1" color="secondary">
              EASTER SALE DEAL OVER 50%
            </Typography>
          </Grid> */}
          <Grid justify="center" xs={12} className={classes.header2}>
            <Typography variant="h2" color="primary">
              DC CONNECT OFFER
            </Typography>
            <Typography variant="h6" color="primary">
              Up to 50% off
            </Typography>
          </Grid>
          <Grid container xs={12} className={classes.mainView}>
            <Grid item xs={2}>
              <FilterList />
            </Grid>
            <Grid container xs={10} spacing={16}>
              {list.map((data, index) => {
                return <Item keyItem={index} itemName={data} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default withStyles(styles)(Index);
