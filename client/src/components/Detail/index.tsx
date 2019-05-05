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
  Link
} from "@material-ui/core";
import { StarBorder, LocationOn, InfoOutlined } from "@material-ui/icons";
import classNames from "classnames";
import item_list from "../../localData/DataList";
import { DeliverList } from "./DeliverList";
import SliderView from "./SliderView";
import Loading from "../Loading";
import ShareList from "./ShareList";
/*redux*/
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleCart, addCart } from "../../actionCreators/cartActions";
import { ItemStructure } from "../../types/types";

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
  isLoading: boolean;
  item: ItemStructure;
  related_item_list: ItemStructure[];
}

class Detail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      size: "",
      labelWidth: 200,
      openD: false,
      openS: false,
      isLoading: true,
      item: null,
      related_item_list: []
    };
  }

  componentDidMount() {
    this.setState(
      {
        item: item_list.find(item => item.id === this.props.match.params.id),
        isLoading: false
      },
      () => {
        this.setState(prevState => {
          return {
            related_item_list: item_list
            // .filter(
            //   item =>
            //     item.brand === prevState.item.brand ||
            //     item.name === prevState.item.name ||
            //     item.color === prevState.item.color
            // )
          };
        });
      }
    );
  }

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

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      const { classes } = this.props;
      const { size, item, related_item_list } = this.state;
      const { name, color, brand, gender, price, discount, img } = item;
      return (
        <Grid container xs={12} className={classes.container3}>
          <Grid item xs={12} md={6}>
            <div
              style={{
                height: 700,
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
            <Grid item>
              <Typography align="left" variant="h3" className={classes.title}>
                {name}
              </Typography>
              <Typography align="left" variant="h4" className={classes.title}>
                {color.toUpperCase()}
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
                  >
                    ${price * discount}.00
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
            <DeliverList
              handleClickCollapse={this.handleClickCollapse}
              open={this.state.openD}
            />
            <br />
            <Divider />
            <ShareList
              handleClickCollapse={this.handleClickCollapse}
              open={this.state.openS}
            />
          </Grid>
          <SliderView related_item_list={related_item_list} />
        </Grid>
      );
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleAddCart(item: ItemStructure) {
    dispatch(addCart(item));
    dispatch(toggleCart());
  }
});

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(Detail)
);
