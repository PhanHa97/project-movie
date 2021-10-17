import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";

export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);

  const dispatch = useDispatch();

  // sẽ tự kích hoạt khi component load ra
  useEffect( () => {

    dispatch(getCarouselAction);

  }, []);

  const contentStyle = {
    height: "550px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <h3 style={contentStyle}>
            <img
              src={item.hinhAnh}
              alt={item.hinhAnh}
              className="w-full h-full"
            />
          </h3>
        </div>
      );
    });
  };

  return (
    <div>
      <Carousel autoplay>{renderImg()}</Carousel>
    </div>
  );
}
