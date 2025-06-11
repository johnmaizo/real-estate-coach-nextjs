import {Box, IconButton} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type ButtonGroupCarouselProps = {
  next?: () => void;
  previous?: () => void;
  carouselState?: {currentSlide: number};
};

export default function ButtonGroupCarousel({
  next = () => {},
  previous = () => {},
  carouselState = {currentSlide: 0},
}: ButtonGroupCarouselProps) {
  const {currentSlide} = carouselState;

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        position: "absolute",
        bottom: -65,
        right: "23%",
      }}>
      <IconButton
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
        sx={{
          backgroundColor: "#F6F6F6",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#696969",
        }}>
        <ArrowBackIosNewIcon sx={{fontSize: "30px"}} />
      </IconButton>
      <IconButton
        onClick={() => next()}
        sx={{
          backgroundColor: "#F6F6F6",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#696969",
        }}>
        <ArrowForwardIosIcon sx={{fontSize: "30px"}} />
      </IconButton>
    </Box>
  );
}
