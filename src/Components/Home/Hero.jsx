import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from "@mui/system";




function Hero() {
   return (
    <Box sx={{ maxWidth: 360, padding: 5, margin: "0 auto" }}>
      <Carousel>
          <div>
            <img src={"https://i.postimg.cc/MTLBtQ86/10.jpg"} alt="sneaker1" />
          </div>
         <div>
            <img src={"https://i.postimg.cc/zH7BTMTk/6.jpg"} alt="sneaker2" />
         </div>
         <div>
            <img src={"https://i.postimg.cc/n9prjZ9z/12.webp"} alt="sneaker3" />
         </div>  
    </Carousel>
   </Box>
   )
}

export default Hero;