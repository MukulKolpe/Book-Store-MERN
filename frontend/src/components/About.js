import { Box, Typography } from "@mui/material";
import { fontFamily } from "@mui/system";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a CRUD Application
        </Typography>
        <Typography variant="h3">By @MukulKolpe</Typography>
      </Box>
    </div>
  );
};

export default About;
