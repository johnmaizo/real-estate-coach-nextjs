import {Box, Button} from "@mui/material";
import Image from "next/image";
import Icon from "@/assets/svg/ArrowFilledCircleIconWhite.svg";

export default function HeroCoachCard() {
  return (
    <Box sx={{py: 20}}>
      <Box
        sx={{
          width: "450px",
          height: "550px",
          backgroundColor: "white",
          borderRadius: "10px",
          position: "relative",
        }}>
        <Box
          component={"img"}
          src="/SirTon.png"
          alt="Sir Ton"
          draggable={false}
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <Button
          variant="contained"
          sx={{
            fontFamily: "Outfit",
            textTransform: "none",
            fontSize: "22px",
            color: "white",
            backgroundColor: "#132D4C",
            borderRadius: "50px",
            display: "inline-flex",
            gap: 3,
            alignItems: "center",
            padding: "5px 20px",
            border: "2px solid white",
            position: "absolute",
            bottom: -30,
            left: "50%",
            transform: "translateX(-50%)",
          }}>
          Hire Me <Image src={Icon} alt="" aria-hidden draggable={false} />
        </Button>
        <Box
          sx={{
            width: "450px",
            height: "550px",
            backgroundColor: "#C5C5C5",
            borderRadius: "10px",
            zIndex: -1,
            position: "absolute",
            bottom: -20,
            left: 20,
          }}></Box>
      </Box>
    </Box>
  );
}
