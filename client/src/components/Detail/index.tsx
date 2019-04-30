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
  Collapse,
  Icon
} from "@material-ui/core";
import {
  StarBorder,
  LocationOn,
  InfoOutlined,
  ExpandLess,
  ExpandMore,
  LocalShippingOutlined
} from "@material-ui/icons";
import classNames from "classnames";
import item_list from "../Dashboard/DataList";
/*redux*/
import { connect } from "react-redux";
import { Dispatch } from "redux";
import toggleCart from "../../actionCreators/toggleCart";
import addCart from "../../actionCreators/addCart";
import { ItemStructure } from "../../types/types";
import RelatedView from "./RelatedView";

const styles = (theme: Theme) =>
  createStyles({
    container3: {
      display: "flex",
      alignItems: "flex-start",
      padding: 50
    },
    formStyle: {
      padding: "16px",
      borderRadius: "0px 5px 5px 0px"
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
  match: any;
  handleAddCart: typeof addCart;
}

interface State {
  size: string;
  labelWidth: number;
  openD: boolean;
  openS: boolean;
}

class Detail extends React.Component<Props, State> {
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

  handleClickCollapse = (e: React.MouseEvent) => {
    this.setState(prevState => ({
      openD: !prevState.openD
    }));
  };

  handleClickCollapse2 = (e: React.MouseEvent) => {
    this.setState(prevState => ({
      openS: !prevState.openS
    }));
  };

  render() {
    const { classes } = this.props;
    const { size } = this.state;

    const id = this.props.match.params.id;
    const item: ItemStructure = item_list.find(item => item.id === id);
    const { name, color, brand, gender, price, discount } = item;
    const price_discount = price * discount;
    let keyPic = 1;
    const related_item_list = item_list.filter(
      related_item => related_item.brand === brand
    );

    return (
      <Grid container xs={12} className={classes.container3}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              height: 700,
              backgroundImage: `url(${
                process.env.PUBLIC_URL
              }/sneaker${keyPic}.png), linear-gradient(to right top, #5217ef, #671ced, #7822ea, #8629e8, #9330e6, #a633df, #b738d8, #c43fd2, #d648c6, #e454bc, #ee63b4, #f472ae)`,
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
            <Typography align="right" variant="body1" className={classes.title}>
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
                <FormControl variant="outlined" className={classes.formControl}>
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
              onClick={e => this.props.handleAddCart(item)}
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
          <Divider />
          <Grid item>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: "#ff8096" }}>
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
          <br />
          <Divider />
          <Grid item>
            <List>
              <ListItem className={classes.list__item}>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: "#ff8096" }}>
                    <Icon
                      className={classNames(classes.icon, "fas fa-share-alt")}
                      color="secondary"
                    />
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
                        "fab fa-facebook-square"
                      )}
                      color="primary"
                    />
                  </IconButton>
                  <IconButton>
                    <Icon
                      className={classNames(
                        classes.icon,
                        "fab fa-twitter-square"
                      )}
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
                      className={classNames(
                        classes.icon,
                        "fab fa-pinterest-square"
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
        <RelatedView related_item_list={related_item_list} />
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleAddCart(item: ItemStructure) {
    dispatch(addCart(item));
    dispatch(toggleCart());
  }
});

export default withStyles(styles)(connect(mapDispatchToProps)(Detail));
