import {Button, ButtonProps} from "@mui/material";
import Image from "next/image";
import Icon from "@/assets/svg/ArrowFilledCircleIconWhite.svg";

import {SxProps, Theme} from "@mui/material";

interface ViewAllButtonProps extends ButtonProps {
  sx?: SxProps<Theme>;
}

export default function ViewAllButton({sx, ...props}: ViewAllButtonProps) {
  return (
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
        ...sx,
      }}
      {...props}>
      View All <Image src={Icon} alt="" aria-hidden draggable={false} />
    </Button>
  );
}
