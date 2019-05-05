import * as React from "react";
import {
  createStyles,
  Grid,
  Typography,
  Theme,
  withStyles,
  WithStyles,
  InputAdornment,
  TextField,
  MenuItem
} from "@material-ui/core";
import { Dispatch } from "redux";
import SearchIcon from "@material-ui/icons/Search";
import { grey } from "@material-ui/core/colors";
import FilterList from "./FilterList";
import ItemCard from "../ItemCard";
import { ItemStructure, FilterInterface } from "../../types/types";
import FlatPagination from "./FlatPagination";
import item_list from "../../localData/DataList";

const styles = (theme: Theme) =>
  createStyles({
    hompage__background: {
      padding: "50px"
    },
    header1: {
      backgroundColor: "red"
    },
    header2: {
      backgroundColor: grey[200]
    },
    mainView: {},
    gridList: {
      width: "100%"
    },
    title: {
      fontWeight: "bold"
    },
    button_quickView: {
      marginTop: -50,
      background: "rgba(0, 0, 0, 0.5)",
      position: "relative"
    },
    title_button: {
      fontWeight: "bold",
      color: "#fff"
    },
    menu: {
      width: 200
    }
  });

const filter: FilterInterface = {
  gender: [{ key: "male", value: false }, { key: "female", value: false }],

  //unused
  brand: [
    { key: "adidas", value: false },
    { key: "nike", value: false },
    { key: "puma", value: false }
  ],
  color: [
    { key: "red", value: false },
    { key: "blue", value: false },
    { key: "black", value: false },
    { key: "white", value: false }
  ]
};

interface Props extends WithStyles<typeof styles> {}

interface State {
  user: string;
  sort: number;
  list_products: ItemStructure[];
  filter: FilterInterface;
  update_list: ItemStructure[];
  offset: number;
  limit: number;
  total: number;
}

class Collection extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user: "namjose",
      sort: 0,
      list_products: [], //original
      filter: filter,
      update_list: [],
      offset: 0,
      limit: 8,
      total: 0
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {
    this.setState({ list_products: item_list });
    this.setState({ update_list: item_list });
    this.setState({ total: item_list.length });
  }

  updateList = (newList: ItemStructure[]) => {
    this.setState({ update_list: newList }, () =>
      this.setState(prevState => {
        return { total: prevState.update_list.length };
      })
    );
    // await this.setState({ total: this.state.update_list.length });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value }: any = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  filterList = () => {
    let newList: ItemStructure[] = [];
    let currentList = item_list; //parent list

    const { filter } = this.state;

    filter.gender
      .filter(filter => filter.value)
      .map(filter => {
        const { key } = filter;
        newList.push(...currentList.filter(item => item.gender === key));
      });

    if (newList.length === 0) {
      newList = currentList;
    }

    this.setState({ list_products: newList });
    this.updateList(newList);
    this.sortList(this.state.sort);

    // let gender_list = item_list;

    // if (tmp_data_list.length !== 0) {
    //   gender_list = tmp_data_list;
    //   tmp_data_list = [];
    // }

    // filter.brand
    //   .filter(filter => filter.value)
    //   .map(filter => {
    //     const { key } = filter;
    //     tmp_data_list.push(...gender_list.filter(item => item.brand === key));
    //   });

    // if (filter.brand.filter(filter => filter.value).length !== 0) {
    //   this.setState({ list_products: tmp_data_list });
    // } else {
    //   this.setState({ list_products: gender_list });
    // }
  };

  handleCheck = (type: string) => async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let { name }: any = e.target; //male, female ...
    let tmp_object = this.state.filter;
    //filter and check in state
    tmp_object[type]
      .filter((filter: { key: string; value: boolean }) => filter.key === name)
      .map(
        (filter: { key: string; value: boolean }) =>
          (filter.value = !filter.value)
      );
    await this.setState({ filter: tmp_object } as Pick<State, keyof State>);
    await this.filterList();
  };

  searchListChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value }: any = e.target;
    value = value.trim();
    this.searchList(value);
  };

  searchList = (search: string) => {
    let currentList: ItemStructure[] = [];
    let newList: ItemStructure[] = [];

    if (search !== "") {
      currentList = this.state.list_products;
      newList = currentList.filter(
        item => item.name.indexOf(search.toUpperCase()) > -1
      );
    } else {
      newList = this.state.list_products;
    }
    this.updateList(newList);
  };

  handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value }: any = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
    this.sortList(value);
  };

  sortList(sort: number) {
    let newList: ItemStructure[] = [];
    const { update_list } = this.state;
    newList = update_list;

    switch (sort) {
      case 0:
        newList.sort((a, b) => {
          if (a.id > b.id) return 1;
          else if (a.id < b.id) return -1;
          else return 0;
        });
        break;
      case 1:
        newList.sort((a, b) => {
          if (a.name > b.name) return 1;
          else if (a.name < b.name) return -1;
          else return 0;
        });
        break;
      case 2:
        newList.sort((a, b) => {
          if (a.name > b.name) return -1;
          else if (a.name < b.name) return 1;
          else return 0;
        });
        break;
      case 3:
        newList.sort((a, b) => {
          if (a.price > b.price) return 1;
          else if (a.price < b.price) return -1;
          else return 0;
        });
        break;
      case 4:
        newList.sort((a, b) => {
          if (a.price > b.price) return -1;
          else if (a.price < b.price) return 1;
          else return 0;
        });
        break;
      default:
    }

    this.setState({ update_list: newList });
  }

  handleClick = (e: React.MouseEvent, offset: number) => {
    this.setState({ offset });
  };

  render() {
    const { searchListChange, handleSortChange, handleClick } = this;
    const {
      user,
      sort,
      filter,
      update_list,
      offset,
      limit,
      total
    } = this.state;
    const { classes } = this.props;
    return (
      <main>
        <Grid container className={classes.hompage__background}>
          <Grid container xs={12} className={classes.mainView}>
            <Grid item xs={2}>
              <FilterList handleCheckBox={this.handleCheck} filter={filter} />
            </Grid>
            <Grid container item xs={10} spacing={16}>
              <Grid
                item
                xs={12}
                style={{ textAlign: "right", height: "100px" }}
              >
                <div>
                  <TextField
                    fullWidth
                    name="search"
                    placeholder="Search item name here..."
                    onChange={searchListChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon style={{ color: "#b5b5b5" }} />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
                <div>
                  <TextField
                    select
                    name="sort"
                    value={sort}
                    onChange={handleSortChange}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                    margin="normal"
                  >
                    <MenuItem value={0}>Relevance</MenuItem>
                    <MenuItem value={1}>Title: A-Z</MenuItem>
                    <MenuItem value={2}>Title: Z-A</MenuItem>
                    <MenuItem value={3}>Price: Low to High</MenuItem>
                    <MenuItem value={4}>Price: High to Low</MenuItem>
                  </TextField>
                </div>
              </Grid>
              {update_list.length === 0 ? (
                <Grid item xs={12}>
                  <Typography variant="h6">No item found</Typography>
                </Grid>
              ) : (
                update_list
                  .filter(
                    (item, index) => index >= offset && index < offset + limit
                  )
                  .map((item, index) => {
                    return (
                      <Grid key={item.id} item xs={12} sm={6} md={3}>
                        <ItemCard item={item} />
                      </Grid>
                    );
                  })
              )}
              <Grid item xs={12} style={{ textAlign: "right" }}>
                <FlatPagination
                  offset={offset}
                  limit={limit}
                  total={total}
                  handleClick={handleClick}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default withStyles(styles)(Collection);
