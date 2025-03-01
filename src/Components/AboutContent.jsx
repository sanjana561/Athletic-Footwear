import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import images from '../Assets/Images/shoe1.jpg'
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor:"bisque", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={images}
            alt="picture"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a"}}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              STUNNING COLLECTION
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              Campus is India’s largest sports and athleisure footwear brand. Incorporated in 2006, 
              Campus Activewear is one of the leading players in organized sports & casual 
              footwear sector in India. Since 2016, the flagship brand "Campus", has been the 
              largest sports and athleisure footwear brand in India, in both volume and value terms. 
              The company’s products are available via an expansive Pan-India network of over 15,000 
              geo-tagged multi-brand retail stores, 35+ company-owned exclusive outlets, 
              large format stores such as Walmart, Vishal Retail and Reliance Smart among others 
              and all the leading e-commerce portals.


            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
