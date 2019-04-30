import * as React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  Grid,
  Typography,
  Divider,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { ItemStructure } from "../../types/types";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    title: {
      fontWeight: "bold"
    },
    price_box: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start"
    }
  });

interface Props extends WithStyles<typeof styles> {
  related_item_list: ItemStructure[];
}

interface State {
  limit: number;
  offset: number;
}

class RelatedView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      limit: 4,
      offset: 0
    };

    this.handleShowNext = this.handleShowNext.bind(this); //neu khong co thi k dung dc this.props, truyen this vao va return ham moi vz argument this
    this.handleShowPrev = this.handleShowPrev.bind(this);
  }

  handleShowNext() {
    const { related_item_list } = this.props;
    const { limit, offset } = this.state;
    let crr_length = this.props.related_item_list.filter(
      (item, index) => index < offset + 1 + limit && index >= offset + 1
    ).length;
    if (crr_length === limit) {
      this.setState(prevState => {
        return {
          offset: prevState.offset + 1
        };
      });
    }
  }

  handleShowPrev() {
    const { related_item_list } = this.props;
    const { limit, offset } = this.state;
    let crr_length = related_item_list.filter(
      (item, index) => index < offset - 1 + limit && index >= offset - 1
    ).length;
    if (crr_length === limit) {
      this.setState(prevState => {
        return {
          offset: prevState.offset - 1
        };
      });
    }
  }

  render() {
    const { classes, related_item_list } = this.props;
    const { limit, offset } = this.state;
    return (
      <React.Fragment>
        <Grid container xs={12}>
          <Divider />
          <Grid item xs={12}>
            <br />
            <br />

            <Typography align="center" variant="h6">
              YOU MIGHT ALSO LIKE
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={this.handleShowPrev}>{`<`}</Button>
          </Grid>
          {related_item_list
            .filter((item, index) => index < offset + limit && index >= offset)
            .map((item, index) => {
              const { id, name, color, brand, gender, price, discount } = item;
              let price_discount = price * discount;
              return (
                <Grid item xs={2} key={index}>
                  <div
                    style={{
                      height: 300,
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL
                      }/sneaker1.png)`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      paddingTop: 5,
                      borderRadius: 5
                    }}
                  />
                  <div>
                    <Typography
                      align="left"
                      variant="h5"
                      className={classes.title}
                    >
                      <Link to={`/details/${id}`}>
                        {name} - {brand.toUpperCase()}
                      </Link>
                    </Typography>
                    <Typography
                      align="left"
                      variant="body1"
                      className={classes.title}
                      style={{ color: "#b5b5b5" }}
                    >
                      {gender === "male" ? "Mens" : "Womens"}
                    </Typography>
                    <div className={classes.price_box}>
                      <div>
                        <Typography
                          variant="h6"
                          className={classes.title}
                          color="primary"
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
                  </div>
                </Grid>
              );
            })}

          <Grid item xs={2}>
            <Button onClick={this.handleShowNext}>{`>`}</Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(RelatedView);
