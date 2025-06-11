import {Box, BoxProps} from "@mui/material";
import {motion} from "framer-motion";
import React from "react";

interface SectionProps extends BoxProps {
  children: React.ReactNode;
}

const Section = ({children, sx, ...rest}: SectionProps) => {
  return (
    <Box
      component={motion.div}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      {...rest}
      sx={[
        {
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
        },
        ...(Array.isArray(sx) ? sx : [sx || {}]),
      ]}>
      {children}
    </Box>
  );
};

export default Section;
