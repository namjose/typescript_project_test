import * as React from "react";
import * as PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import CartDrawer from "./CartDrawer";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing.unit,
        width: "auto"
      }
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 120,
        "&:focus": {
          width: 200
        }
      }
    },
    link: {
      color: "primary",
      margin: 20
    },
    typo: {
      fontWeight: "bold"
    }
  });

export interface Props extends WithStyles<typeof styles> {}

function SearchAppBar(props: Props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Button href="/">
            <Typography variant="h6" color="secondary">
              DC CONNECT
            </Typography>
          </Button>
          <Button href="/collections/mens">
            <Typography variant="h6" color="secondary">
              Men
            </Typography>
          </Button>
          <Button href="/">
            <Typography variant="h6" color="secondary">
              Women
            </Typography>
          </Button>
          <Button href="/">
            <Typography variant="h6" color="secondary">
              Sale
            </Typography>
          </Button>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
          <Button href="/login">
            <Typography variant="h6" color="secondary">
              Login
            </Typography>
          </Button>

          <Button href="/register">
            <Typography variant="h6" color="secondary">
              Register
            </Typography>
          </Button>
          <CartDrawer />
        </Toolbar>
      </AppBar>
    </div>
  );
}

// SearchAppBar.propTypes = {
//   classes: PropTypes.object.isRequired
// } as any;

export default withStyles(styles)(SearchAppBar);
