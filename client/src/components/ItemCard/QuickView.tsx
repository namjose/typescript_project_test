import * as React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  Grid,
  Typography,
  Button,
  Divider,
  IconButton,
  InputLabel,
  FormControl,
  Select,
  OutlinedInput,
  Link,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Avatar,
  List,
  Collapse
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import classNames from "classnames";
import { StarBorder, LocationOn, InfoOutlined } from "@material-ui/icons";
import ShareList from "../Detail/ShareList";
import { addCart } from "../../actionCreators/cartActions";
import { ItemStructure } from "../../types/types";

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
      whiteSpace: "nowrap"
    },
    mainView: {
      width: "80%",
      height: "95%",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      overflow: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    container3: {
      display: "flex",
      alignItems: "center"
    },
    formStyle: {
      height: 680,
      backgroundColor: "white",
      padding: "16px",
      borderRadius: "0px 5px 5px 0px"
    },
    buttonX: {
      display: "flex",
      marginTop: -15,
      marginRight: -15
    },
    button: {
      padding: "12px 24px",
      fontWeight: "bold"
    },
    title: {
      fontWeight: "bold"
    },
    formControl: {
      width: 200
    },
    icon: {
      margin: theme.spacing.unit * 2
    },
    iconX: {
      fontSize: 20
    },
    price_box: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start"
    },
    description: {
      height: 80,
      fontStyle: "italic"
    },
    list__item: {
      paddingTop: "0px",
      paddingBottom: "0px"
    }
  });

interface Props extends WithStyles<typeof styles> {
  popUp_view: any;
  item: ItemStructure;
  handleAddCart: typeof addCart;
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
    openS: false
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: any = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  handleClickCollapse = (stateName: string) => {
    if (stateName === "openD") {
      this.setState(prevState => ({
        openD: !prevState[stateName]
      }));
    } else if (stateName === "openS") {
      this.setState(prevState => ({
        openS: !prevState[stateName]
      }));
    }
  };

  handleClickAddButton = (e: React.MouseEvent) => {
    this.props.popUp_view();
    this.props.handleAddCart(this.props.item);
  };

  render() {
    const { classes, popUp_view, item, handleAddCart } = this.props;
    const { id, name, color, brand, gender, price, discount, img } = item;
    const price_discount = price * discount;
    const { size, openD } = this.state;
    return (
      <div key={id} className={classes.root}>
        <div className={classes.mainView}>
          <Grid container xs={12} className={classes.container3}>
            <Grid item xs={12} md={6}>
              <div
                style={{
                  height: 700,
                  backgroundColor: "white",
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL
                  }/sneaker${img}.png)`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  paddingTop: 5,
                  borderRadius: 5
                }}
              />
            </Grid>
            <Grid
              item
              direction="column"
              xs={12}
              md={6}
              spacing={16}
              className={classes.formStyle}
            >
              <Grid item justify="flex-end" className={classes.buttonX}>
                <IconButton style={{ padding: "0px" }} onClick={popUp_view}>
                  <Icon
                    className={classNames(classes.iconX, "fas fa-times")}
                    style={{ color: "#808080" }}
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography align="left" variant="h3" className={classes.title}>
                  {name}
                </Typography>
                <Typography align="left" variant="h4" className={classes.title}>
                  {item.color.toUpperCase()}
                </Typography>
              </Grid>
              <Divider />
              <Grid item>
                <Typography
                  align="right"
                  variant="body1"
                  className={classes.title}
                >
                  EG7596
                </Typography>
                <div className={classes.price_box}>
                  <div>
                    <Typography
                      variant="h4"
                      className={classes.title}
                      color="primary"
                      // style={{ color: "#e62e49" }}
                    >
                      ${price_discount}.00
                    </Typography>
                  </div>
                  <div style={{ marginLeft: 12 }}>
                    <Typography
                      variant="h6"
                      className={classes.title}
                      color="textSecondary"
                      style={{ textDecoration: "line-through" }}
                    >
                      ${price}.00
                    </Typography>
                  </div>
                </div>
                <br />
                <br />
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
                  variant="contained"
                  color="primary"
                  onClick={this.handleClickAddButton}
                >
                  <Typography variant="button" color="secondary">
                    ADD TO CART
                  </Typography>
                </Button>
              </Grid>
              <br />
              <Divider />
              <Grid item>
                <Typography
                  variant="h6"
                  align="left"
                  className={classes.description}
                >
                  Description
                </Typography>
              </Grid>
              <br />
              <Divider />
              <ShareList
                handleClickCollapse={this.handleClickCollapse}
                open={this.state.openS}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(QuickView);
