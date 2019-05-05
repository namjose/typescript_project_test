import * as React from "react";

import { Typography, Link } from "@material-ui/core";
import { ItemStructure } from "../../types/types";

interface CustomSlideProps {
  index: number;
  item: ItemStructure;
}

export class CustomSlide extends React.Component<CustomSlideProps> {
  constructor(props: CustomSlideProps) {
    super(props);
  }
  render() {
    const { index, item } = this.props;
    const { id, name, color, brand, gender, price, discount, img } = item;
    let price_discount = price * discount;
    return (
      <div key={index}>
        <div
          style={{
            height: 300,
            backgroundImage: `url(${process.env.PUBLIC_URL}/sneaker${img}.png)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingTop: 5,
            borderRadius: 5
          }}
        />
        <div>
          <Typography align="left" variant="h5">
            <Link underline="none" href={`/products/${id}`}>
              {name} - {brand.toUpperCase()}
            </Link>
          </Typography>
          <Typography
            align="left"
            variant="body1"
            //   className={classes.title}
            style={{ color: "#b5b5b5" }}
          >
            {gender === "male" ? "Mens" : "Womens"}
          </Typography>
          <div style={{ display: "flex" }}>
            <div>
              <Typography
                variant="h6"
                //   className={classes.title}
                color="primary"
              >
                ${price_discount}.00
              </Typography>
            </div>
            <div style={{ marginLeft: 12 }}>
              <Typography
                variant="h6"
                //   className={classes.title}
                color="textSecondary"
                style={{ textDecoration: "line-through" }}
              >
                ${price}.00
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
