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
import FilterInterface from "./FilterInterface";

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
  handleCheckBox: (
    type: string,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  filter: FilterInterface;
}

interface State {}

class FilterList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state = {};

  render() {
    const { classes, handleCheckBox, filter } = this.props;
    return (
      <React.Fragment>
        <List key="filter_bar">
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h5" className={classes.title}>
                  FILTER
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="middle" />
          <List>
            <ListItem>
              <ListItemText>
                <Typography variant="h6">Gender</Typography>
              </ListItemText>
            </ListItem>
            {filter.gender.map((filter, index) => {
              return (
                <ListItem key={index} className={classes.list__item}>
                  <ListItemText>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={filter.key}
                          value={filter.value}
                          onChange={handleCheckBox("gender")}
                          color="primary"
                        />
                      }
                      label={filter.key.toUpperCase()}
                    />
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
          <Divider variant="middle" />
          <List>
            <ListItem>
              <ListItemText>
                <Typography variant="h6">Brand</Typography>
              </ListItemText>
            </ListItem>
            {filter.brand.map((filter, index) => {
              return (
                <ListItem key={index} className={classes.list__item}>
                  <ListItemText>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={filter.key}
                          value={filter.value}
                          onChange={handleCheckBox("brand")}
                          color="primary"
                        />
                      }
                      label={filter.key.toUpperCase()}
                    />
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
          <Divider variant="middle" />
          <List>
            <ListItem>
              <ListItemText>
                <Typography variant="h6">Color</Typography>
              </ListItemText>
            </ListItem>
            {filter.brand.map((filter, index) => {
              return (
                <ListItem key={index} className={classes.list__item}>
                  <ListItemText>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={filter.key}
                          value={filter.value}
                          onChange={handleCheckBox("color")}
                          color="primary"
                        />
                      }
                      label={filter.key.toUpperCase()}
                    />
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
          {/* <List>
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
              </List> */}
        </List>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(FilterList);
