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
  FormControl,
  MenuItem,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { grey } from "@material-ui/core/colors";
import FilterList from "./FilterList";
import Item from "./Item";

import ItemStructure from "./ItemStructure";
import item_list from "./DataList";

const styles = (theme: Theme) =>
  createStyles({
    hompage__background: {},
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
    menu: {
      width: 200,
    },
  });

interface Props extends WithStyles<typeof styles> {}

interface State {
  user: string;
  search: string;
  sort: number;
  list_products: ItemStructure[];
  filter_list: {
    type: string;
    label: string;
    value: string;
    checked: boolean;
  }[];
}

const filter_list: {
  type: string;
  label: string;
  value: string;
  checked: boolean;
}[] = [
  {
    type: "Gender",
    label: "Male",
    value: "male",
    checked: false,
  },
  {
    type: "Gender",
    label: "Female",
    value: "female",
    checked: false,
  },
  //brand
  {
    type: "Brand",
    label: "Adidas",
    value: "adidas",
    checked: false,
  },
  {
    type: "Brand",
    label: "Nike",
    value: "nike",
    checked: false,
  },
  {
    type: "Brand",
    label: "Puma",
    value: "puma",
    checked: false,
  },
  {
    type: "Brand",
    label: "Vans",
    value: "vans",
    checked: false,
  },
];

class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user: "namjose",
      search: "",
      sort: 0,
      list_products: item_list,
      filter_list: filter_list,
    };
  }

  filterList = () => {
    let tmp_data_list: ItemStructure[] = [];
    const checked_filter: {
      type: string;
      label: string;
      value: string;
      checked: boolean;
    }[] = [];
    this.state.filter_list
      .filter(object => object.checked)
      .map(filter_object => {
        checked_filter.push(filter_object);
      });

    checked_filter
      .filter(object => object.type === "Gender")
      .map(filter => {
        tmp_data_list.push(
          ...item_list.filter(object => object.gender === filter.value),
        );
      });

    const nested_filter = checked_filter.filter(
      object => object.type === "Brand",
    );

    if (nested_filter.length !== 0) {
      let adapt_list = item_list;
      if (
        checked_filter.filter(object => object.type === "Gender").length !== 0
      ) {
        adapt_list = tmp_data_list;
        tmp_data_list = [];
      }

      nested_filter.map(filter => {
        tmp_data_list.push(
          ...adapt_list.filter(object => object.brand === filter.value),
        );
      });
    }

    filter_list.filter(object => object.checked).length === 0
      ? this.setState({ list_products: item_list })
      : this.setState({ list_products: tmp_data_list });
  };

  handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name }: any = e.target;
    let tmp_object = this.state.filter_list;
    //filter and check in state
    tmp_object
      .filter((object: any) => object.value === name)
      .map((object: any) => (object.checked = !object.checked));

    this.setState({ filter_list: tmp_object } as Pick<State, keyof State>);

    this.filterList();
  };

  handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value }: any = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);

    if (value !== 0) {
      this.sortList(value);
    } else {
      this.setState({ list_products: item_list });
    }
  };

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value }: any = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);

    if (value.trim() !== "") {
      this.filterSearch(value.trim());
    } else {
      this.setState({ list_products: item_list });
    }
  };

  filterSearch = (search: string) => {
    let tmp_data_list: ItemStructure[] = [];
    tmp_data_list = item_list.filter(
      item => item.name.indexOf(search.toUpperCase()) > -1,
    );
    this.setState({ list_products: tmp_data_list });
  };

  sortList(sort: number) {
    let tmp_data_list: ItemStructure[] = [];
    switch (sort) {
      case 1:
        tmp_data_list = item_list.sort((a, b) => {
          if (a.name > b.name) return 1;
          else if (a.name < b.name) return -1;
          else return 0;
        });
        break;

      case 2:
        tmp_data_list = item_list.sort((a, b) => {
          if (a.name > b.name) return -1;
          else if (a.name < b.name) return -1;
          else return 0;
        });
        break;

      case 3:
        tmp_data_list = item_list.sort((a, b) => {
          if (a.price > b.price) return -1;
          else if (a.price < b.price) return -1;
          else return 0;
        });
        break;

      case 4:
        tmp_data_list = item_list.sort((a, b) => {
          if (a.price > b.price) return -1;
          else if (a.price < b.price) return -1;
          else return 0;
        });
        break;

      default:
        tmp_data_list = [];
    }

    this.setState({ list_products: tmp_data_list });
  }

  render() {
    const { handleSearchChange, handleSortChange } = this;
    const { user, list_products, filter_list, search, sort } = this.state;
    const { classes } = this.props;
    return (
      <main>
        <Grid container className={classes.hompage__background}>
          <Grid container xs={12} className={classes.mainView}>
            <Grid item xs={2}>
              <FilterList
                handleCheckBox={this.handleCheck}
                filter_list={filter_list}
              />
            </Grid>
            <Grid container item xs={10} spacing={16}>
              <Grid item xs={12} style={{ textAlign: "left" }}>
                <div>
                  <TextField
                    fullWidth
                    name="search"
                    value={search}
                    placeholder="Search item name here..."
                    onChange={handleSearchChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon style={{ color: "#b5b5b5" }} />
                        </InputAdornment>
                      ),
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
                        className: classes.menu,
                      },
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
              {list_products.map((item, index) => {
                return (
                  <Item keyItem={index} itemName={item.name} item={item} />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default withStyles(styles)(Index);
