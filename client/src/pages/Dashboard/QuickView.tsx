import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  Grid,
  CardContent,
  Card,
  Typography,
  CardActions,
  Button,
  Divider,
  IconButton,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  OutlinedInput,
  Link,
  ListItemText,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  List,
  Collapse,
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import classNames from "classnames";

import {
  StarBorder,
  LocationOn,
  InfoOutlined,
  LocalShippingOutlined,
  Share,
} from "@material-ui/icons";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      background: "rgba(0,0,0,0.8)",
      position: "fixed",
      zIndex: 1000,
      textAlign: "center",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      whiteSpace: "nowrap",
      // display: "none"
    },
    mainView: {
      width: "90%",
      height: "95%",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      overflow: "auto",
      verticalAlign: "middle",
      backgroundColor: "white",
      display: "inline-block",
    },
    buttonX: {
      position: "absolute",
      top: 0,
      right: 0,
    },
    button: {
      //   margin: theme.spacing.unit,
      padding: "12px 24px",
      fontWeight: "bold",
    },
    formStyle: {
      padding: "24px 24px",
    },
    title: {
      fontWeight: "bold",
    },
    formControl: {
      width: 200,
    },
    icon: {
      margin: theme.spacing.unit * 2,
    },
  });

interface Props extends WithStyles<typeof styles> {
  popUp_view: any;
  data: any;
}
interface State {
  size: string;
  labelWidth: number;
  openD: boolean;
  openS: boolean;
}

class QuickView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  state = {
    size: "",
    labelWidth: 200,
    openD: false,
    openS: false,
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: any = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  handleClickCollapse = (e: React.MouseEvent) => {
    this.setState(prevState => ({
      openD: !prevState.openD,
    }));
  };

  handleClickCollapse2 = (e: React.MouseEvent) => {
    this.setState(prevState => ({
      openS: !prevState.openS,
    }));
  };

  render() {
    const { classes, popUp_view, data } = this.props;
    const { size, openD } = this.state;
    // if (!isHidden) {
    //   display = "block";
    // }
    return (
      <div key={data.keyItem} className={classes.root}>
        <div className={classes.mainView}>
          <Button className={classes.buttonX} onClick={popUp_view}>
            <Typography variant="h6" className={classes.title}>
              X
            </Typography>
          </Button>
          <Grid container xs={12} spacing={16} className={classes.formStyle}>
            <Grid item xs={6}>
              <div
                style={{
                  height: 600,
                  backgroundColor: "#fafafa",
                }}
              />
            </Grid>
            <Grid
              item
              direction="column"
              xs={6}
              spacing={16}
              className={classes.formStyle}
            >
              <Grid item>
                <Typography variant="h3" className={classes.title}>
                  {data.itemName}
                </Typography>
                <Typography variant="h4" className={classes.title}>
                  BLUE/WHITE
                </Typography>
              </Grid>
              <Divider />
              <Grid item>
                <Typography
                  align="right"
                  variant="body1"
                  className={classes.title}
                >
                  #123456
                </Typography>
                <Typography align="left" variant="h5" className={classes.title}>
                  $19.95
                  <br />
                  <br />
                </Typography>
                <div style={{ display: "flex" }}>
                  <div>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel htmlFor="outlined-age-native-simple">
                        Select Size
                      </InputLabel>
                      <Select
                        native
                        input={
                          <OutlinedInput
                            name="size"
                            value={size}
                            onChange={this.handleChange}
                            labelWidth={this.state.labelWidth}
                            id="outlined-age-native-simple"
                          />
                        }
                      >
                        <option value="" />
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                      </Select>
                    </FormControl>
                  </div>
                  <div style={{ margin: "auto 10px" }}>
                    <Link
                      href="/"
                      color="inherit"
                      variant="body1"
                      className={classes.title}
                      underline="none"
                    >
                      <InfoOutlined style={{ margin: "-7px 0" }} />
                      Size and Fit
                    </Link>
                  </div>
                </div>

                <br />
              </Grid>
              <Divider />
              <Grid item>
                <Typography align="right">
                  <IconButton>
                    <LocationOn />
                  </IconButton>
                  <IconButton>
                    <StarBorder />
                  </IconButton>
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  <Typography className={classes.title} variant="h6">
                    ADD TO CART
                  </Typography>
                </Button>
              </Grid>
              <br />
              <Divider />
              <Grid item>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <LocalShippingOutlined />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Delivery" />
                    {this.state.openD ? (
                      <IconButton onClick={this.handleClickCollapse}>
                        <ExpandLess />
                      </IconButton>
                    ) : (
                      <IconButton onClick={this.handleClickCollapse}>
                        <ExpandMore />
                      </IconButton>
                    )}
                  </ListItem>
                  <Collapse in={this.state.openD} timeout="auto">
                    <List>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Typography variant="h5" className={classes.title}>
                              Vietnam
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Standard Shipping" />
                        $5.00
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Free Standard Shipping" />
                        $0.00
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Express Standard Shipping" />
                        $15.00
                      </ListItem>
                    </List>
                  </Collapse>
                </List>
              </Grid>

              <Divider />
              <Grid item>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <LocalShippingOutlined />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Share" />
                    {this.state.openS ? (
                      <IconButton onClick={this.handleClickCollapse2}>
                        <ExpandLess />
                      </IconButton>
                    ) : (
                      <IconButton onClick={this.handleClickCollapse2}>
                        <ExpandMore />
                      </IconButton>
                    )}
                  </ListItem>
                  <Collapse in={this.state.openS} timeout="auto">
                    <List>
                      <IconButton>
                        <Icon
                          className={classNames(
                            classes.icon,
                            "fab fa-facebook-square",
                          )}
                          color="primary"
                        />
                      </IconButton>
                      <IconButton>
                        <Icon
                          className={classNames(
                            classes.icon,
                            "fab fa-twitter-square",
                          )}
                          color="primary"
                        />
                      </IconButton>
                      <IconButton>
                        <Icon
                          className={classNames(
                            classes.icon,
                            "fab fa-google-plus-square",
                          )}
                          color="primary"
                        />
                      </IconButton>
                      <IconButton>
                        <Icon
                          className={classNames(
                            classes.icon,
                            "fab fa-pinterest-square",
                          )}
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
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(QuickView);
