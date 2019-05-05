import * as React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  Grid,
  ListItem,
  List,
  Avatar,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Collapse,
  Icon
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import classNames from "classnames";

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      margin: theme.spacing.unit * 2
    },
    list__item: {
      paddingTop: "0px",
      paddingBottom: "0px"
    }
  });

interface Props extends WithStyles<typeof styles> {
  handleClickCollapse: (stateName: string) => void;
  open: boolean;
}

const ShareList = (props: Props) => {
  const { classes, handleClickCollapse, open } = props;
  return (
    <Grid item>
      <List>
        <ListItem className={classes.list__item}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: "#212121" }}>
              <Icon
                className={classNames(classes.icon, "fas fa-share-alt")}
                color="secondary"
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Share" />
          {open ? (
            <IconButton onClick={e => handleClickCollapse("openS")}>
              <ExpandLess />
            </IconButton>
          ) : (
            <IconButton onClick={e => handleClickCollapse("openS")}>
              <ExpandMore />
            </IconButton>
          )}
        </ListItem>
        <Collapse in={open} timeout="auto">
          <List>
            <IconButton>
              <Icon
                className={classNames(classes.icon, "fab fa-facebook-square")}
                color="primary"
              />
            </IconButton>
            <IconButton>
              <Icon
                className={classNames(classes.icon, "fab fa-twitter-square")}
                color="primary"
              />
            </IconButton>
            <IconButton>
              <Icon
                className={classNames(
                  classes.icon,
                  "fab fa-google-plus-square"
                )}
                color="primary"
              />
            </IconButton>
            <IconButton>
              <Icon
                className={classNames(classes.icon, "fab fa-pinterest-square")}
                color="primary"
              />
            </IconButton>
            <IconButton>
              <Icon
                className={classNames(classes.icon, "fas fa-at")}
                color="primary"
              />
            </IconButton>
          </List>
        </Collapse>
      </List>
    </Grid>
  );
};

export default withStyles(styles)(ShareList);
