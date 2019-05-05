import * as React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  Grid,
  Typography,
  Divider,
  Button,
  Link
} from "@material-ui/core";
import { ItemStructure } from "../../types/types";
import SliderRelated from "./SliderRelated";
import SliderRecent from "./SliderRecent";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    title: {
      fontWeight: "bold"
    },
    price_box: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start"
    }
  });

interface Props extends WithStyles<typeof styles> {
  related_item_list: ItemStructure[];
}

class SliderView extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <SliderRelated {...this.props} />
        </Grid>
        <Grid item xs={12} style={{ marginTop: 100 }}>
          <SliderRecent {...this.props} />
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SliderView);
