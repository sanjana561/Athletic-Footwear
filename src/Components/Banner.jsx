import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import logo1 from '../Assets/Images/shoe3.jpg'
const Banner = () => {
  return (
    <Box
      sx={{
        //bgcolor: "#cfcfcfba",
        backgroundImage: `url(${logo1})`,
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
        width: "100%",
        height: "90vh",
        backgroundPosition: "justify",
        backgroundSize: "cover",
        
        backgroundRepeat: "no-repeat",
        
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
            <Typography variant="h3" sx={{ fontWeight: "bold",color:"blue" }}>
            WE BRING THE LATEST TRENDY WEAR
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textTransform: "lowercase",
                color: { xs: "white", sm: "#212121" },
                fontWeight: "bold",
                pb: 3, fontSize: "x-large",color: "white"
            
              }}
            >
             WALK LIGHTLY LEARNING TO ENJOY YOUR WALK..
             
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textTransform: "lowercase",
                color: { xs: "white", sm: "#212121" },
                fontWeight: "bold",
                pb: 3,
                fontSize: "inherit",color: "red"
              }}
            >
            
             Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            </Typography>
          </Box>
        </Grid>

        {/* Right Content (Empty for Now) */}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
