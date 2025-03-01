import { Box, Button, Typography } from "@mui/material";
import React from "react";
import logo1 from '../Assets/Images/shoeimages.jpg'
import { Pages } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Hero() {
  return (

    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "justify",
        backgroundSize: "cover",
        opacity: 0.8,
        backgroundImage: `url(${logo1})`
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display:"flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundRepeat:"no-repeat",
          textAlign: "center",
          
          
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "red",
            backgroundColor:"khaki"
          }}
          gutterBottom
        >
          <strong>Step-up your stride</strong>
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "50px", color: "blue", backgroundColor:"aqua" }}
        >
          Premium Athletic Footwear
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "14%" ,height: "7%",background:"radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)"
            
          }}
          
        >
          
         <Button href="Shop" style={{color: "black",fontSize:"large"}}> Shop Now</Button>
        </Typography>
      </Box>
    </Box>
  );
}
