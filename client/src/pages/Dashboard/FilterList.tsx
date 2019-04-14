import * as React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  RadioGroup,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { ChangeEvent } from "react";
import Radio from "@material-ui/core/Radio";

enum Direction {
  Red,
  Blue,
  Black,
  White,
  None,
}

interface Props {}

interface State {
  gender: string;
  brand: string;
  color: string;
  selectedOption: string;
}

class FilterList extends React.Component<Props, State> {
  state = {
    gender: "",
    brand: "",
    color: "",
    selectedOption: "Men",
  };

  handleChange = (e: React.ChangeEvent) => {
    const { name, value }: any = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  render() {
    const { handleChange } = this;
    const { gender, brand, color, selectedOption } = this.state;
    return (
      <React.Fragment>
        <FormControl>
          <Typography variant="title">You Have Selected</Typography>
          <List>
            <ListItem disableGutters>
              <ListItemText primary={selectedOption} />
            </ListItem>
          </List>
          <FormLabel>
            <Typography align="left">Gender</Typography>
          </FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender"
            value={gender}
            onChange={handleChange}
          >
            <FormControlLabel
              value="male"
              control={<Radio color="primary" />}
              label="Male"
            />
            <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              label="Female"
            />
          </RadioGroup>
          <br />
          <FormLabel>
            <Typography align="left">Brand</Typography>
          </FormLabel>
          <RadioGroup
            aria-label="Brand"
            name="brand"
            value={brand}
            onChange={handleChange}
          >
            <FormControlLabel
              value="adidas"
              control={<Radio color="primary" />}
              label="Adidas"
            />
            <FormControlLabel
              value="nike"
              control={<Radio color="primary" />}
              label="Nike"
            />
          </RadioGroup>
          <br />
          <FormLabel>
            <Typography align="left">Color</Typography>
          </FormLabel>
          <RadioGroup
            aria-label="Color"
            name="color"
            value={color}
            onChange={handleChange}
          >
            <FormControlLabel
              value="red"
              control={<Radio color="primary" />}
              label="Red"
            />
            <FormControlLabel
              value="blue"
              control={<Radio color="primary" />}
              label="Blue"
            />
          </RadioGroup>
        </FormControl>
      </React.Fragment>
    );
  }
}

export default FilterList;
