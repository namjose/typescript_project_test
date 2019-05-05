import * as React from "react";
import Slider from "react-slick";
import { ItemStructure } from "../../types/types";
import { Typography } from "@material-ui/core";
// import { CustomSlide } from "./CustomSlide";
import ItemCard from "../ItemCard";
import { SampleNextArrow, SamplePrevArrow } from "./SampleArrow";

interface Props {
  related_item_list: ItemStructure[];
}

export default class SwipeToSlide extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { related_item_list } = this.props;
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      //   afterChange: function(index: number) {
      //     console.log(
      //       `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      //     );
      //   }
    };
    return (
      <div>
        <Typography variant="h5">YOU MIGHT ALSO LIKE</Typography>
        <Slider {...settings}>
          {related_item_list.map(item => {
            return <ItemCard item={item} />;
          })}
        </Slider>
      </div>
    );
  }
}
