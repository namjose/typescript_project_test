import * as React from "react";
import {
  createStyles,
  Grid,
  Typography,
  Theme,
  withStyles,
  WithStyles,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  Checkbox,
} from "@material-ui/core";
import { ChangeEvent } from "react";
import Radio from "@material-ui/core/Radio";

const styles = (theme: Theme) =>
  createStyles({
    selected__box: {
      border: "1px solid black",
      margin: "2px",
    },
    selected__text: {
      padding: "5px 10px",
    },
    list__item: {
      paddingTop: "0px",
      paddingBottom: "0px",
    },
    title: {
      fontWeight: "bold",
    },
  });

interface Props extends WithStyles<typeof styles> {
  filter_list: {
    type: string;
    label: string;
    value: string;
    checked: boolean;
  }[];
  handleCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface State {
  selectedOption: string[];

  // gender: object;
  // brand: object;
  color: any;
}

const color_array = [
  {
    label: "Red",
    checked: false,
    quantity: 50,
  },
  {
    label: "Blue",
    checked: false,
    quantity: 10,
  },
  {
    label: "Black",
    checked: false,
    quantity: 20,
  },
  {
    label: "White",
    checked: false,
    quantity: 30,
  },
];

const emptyString: string[] = [];

class FilterList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state = {
    selectedOption: emptyString,

    color: color_array,
  };

  handleChange = (object_name: string) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let name: any = e.target.name;

    let tmp_object = this.state[object_name];
    tmp_object[name] = !tmp_object[name];

    this.setState({ [object_name]: tmp_object } as Pick<State, keyof State>);
  };

  handleCheck = (object_name: string) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let { name }: any = e.target;

    let tmp_object = this.state[object_name];

    tmp_object
      .filter((object: any) => object.label === name)
      .map((object: any) => (object.checked = !object.checked));

    this.setState({ [object_name]: tmp_object } as Pick<State, keyof State>);
  };

  render() {
    const { classes, filter_list, handleCheckBox } = this.props;
    const { handleChange, handleCheck } = this;
    const { color, selectedOption } = this.state;
    return (
      <React.Fragment>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h5" className={classes.title}>
                  FILTER
                </Typography>
              }
            />
          </ListItem>
          <List>
            <ListItem>
              <ListItemText
                primary={<Typography variant="h6">Gender</Typography>}
              />
            </ListItem>
            {filter_list
              .filter(check_object => check_object.type === "Gender")
              .map((check_object, index) => {
                return (
                  <ListItem key={index} className={classes.list__item}>
                    <ListItemText>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name={check_object.value}
                            checked={check_object.checked}
                            onChange={handleCheckBox}
                            color="primary"
                          />
                        }
                        label={check_object.label}
                      />
                    </ListItemText>
                  </ListItem>
                );
              })}
          </List>

          <Divider variant="middle" />
          <List>
            <ListItem>
              <ListItemText
                primary={<Typography variant="h6">Brand</Typography>}
              />
            </ListItem>
            {filter_list
              .filter(check_object => check_object.type === "Brand")
              .map((check_object, index) => {
                return (
                  <ListItem key={index} className={classes.list__item}>
                    <ListItemText>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name={check_object.value}
                            checked={check_object.checked}
                            onChange={handleCheckBox}
                            color="primary"
                          />
                        }
                        label={check_object.label}
                      />
                    </ListItemText>
                  </ListItem>
                );
              })}
          </List>

          {/* <Divider variant="middle" />
          <List>
            <ListItem>
              <ListItemText
                primary={<Typography variant="h6">Color</Typography>}
              />
            </ListItem>
            {color.map((object, index) => {
              return (
                <ListItem key={index} className={classes.list__item}>
                  <ListItemText>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={object.label}
                          checked={object.checked}
                          onChange={handleCheck("color")}
                          color="primary"
                        />
                      }
                      label={object.label}
                    />
                  </ListItemText>
                  <Typography color="textSecondary">
                    ({object.quantity})
                  </Typography>
                </ListItem>
              );
            })}
          </List> */}
        </List>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(FilterList);
