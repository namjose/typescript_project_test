import * as React from "react";
import {
  createStyles,
  Grid,
  Typography,
  Theme,
  WithStyles
} from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {}
  });

interface Props extends WithStyles<typeof styles> {
  match: any;
}

const Detail = (props: Props) => {
  const { classes } = props;
  const id = props.match.params.id;
  return (
    <Grid>
      <Typography>Hello Word {id}</Typography>
    </Grid>
  );
};

export default Detail;
