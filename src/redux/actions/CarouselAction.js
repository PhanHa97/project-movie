import axios from "axios";
import { DOMAIN, TOKEN } from "../../util/settings/config";
import { SET_CAROUSEL } from "./types/CarouselType";

export const getCarouselAction = async (dispatch) => {
  try {
    const result = await axios({
      url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
      method: "GET",
      headers: {
        TokenCybersoft: `${TOKEN}`,
      },
    });
    // Đưa lên reducer
    dispatch({
      type: SET_CAROUSEL,
      arrImg: result.data.content,
    });
  } catch (errors) {
    console.log(errors);
  }
};
