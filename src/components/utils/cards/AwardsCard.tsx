import {Box, IconButton, Typography} from "@mui/material";

import Image from "next/image";

import HeartIcon from "@/assets/svg/HeartIcon.svg";
import CommentIcon from "@/assets/svg/CommentIcon.svg";
import ShareIcon from "@/assets/svg/ShareIcon.svg";
import FavoriteIcon from "@/assets/svg/FavoriteIcon.svg";

interface AwardsCardProps {
  imageUrl: string;
  title: string;
}

export default function AwardsCard({imageUrl, title}: AwardsCardProps) {
  return (
    <Box
      sx={{
        pt: 4.5,
        backgroundColor: "white",
        borderRadius: "15px",
        position: "relative",
        width: "100%",
        maxWidth: "320px",
        overflow: "hidden",
      }}>
      <Image
        src={imageUrl}
        alt={title}
        draggable={false}
        width={320}
        height={213}
        style={{width: "100%", height: "auto", margin: 0, padding: 0}}
      />
      <Box
        sx={{
          backgroundColor: "#0058F8",
          p: 3,
          position: "relative",
          //   "&:before": {
          //     content: '""',

          //   },
          //   "&:after": {
          //     content: '""',

          //   },
        }}>
        <Typography
          variant="h5"
          component={"h5"}
          sx={{color: "white", fontFamily: "Outfit", fontSize: "32px"}}>
          {title}
        </Typography>
        {/* <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "5em",
            top: -70,
            left: 0,
            backgroundColor: "#0058F8",
            overflow: "hidden",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "5em",
            top: -70,
            left: -60,
            borderRadius: "0 0 4em 0",
            backgroundColor: "red",
            overflow: "hidden",
          }}
        /> */}
      </Box>
      <Box
        sx={{
          p: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItem: "center",
        }}>
        <Box sx={{display: "flex", alignItem: "center", flexWrap: "wrap"}}>
          <IconButton>
            <Image src={HeartIcon} alt="Like" />
          </IconButton>
          <IconButton>
            <Image src={CommentIcon} alt="Comment" />
          </IconButton>
          <IconButton>
            <Image src={ShareIcon} alt="Share" />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <Image src={FavoriteIcon} alt="Favorite" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
