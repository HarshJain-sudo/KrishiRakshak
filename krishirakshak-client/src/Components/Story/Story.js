import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Profile from "../../Assets/images/profile.jpeg";
import "./Story.scss";
const Story = () => {
  return (
    <a href="https://pmkisan.gov.in/" target="_blank" rel="noreferrer">
      <Box className="Friends">
        <Box
          className="title"
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          paddingY="10px"
        >
          <Box>
            <Typography variant="h6" align="center">PM KISAN SAMMAN NIDHI</Typography>
          </Box>
        </Box>
        <Box className="Content" display="flex" flexWrap="wrap">
          <Box display="flex">
            <img
              src="https://pmkisan.gov.in/new_images/SabkaSathSabkaVikasSabkaViswas.jpg"
              width="500px"
              height="100px"
              alt="friendName"
            />
          </Box>
        </Box>
      </Box>
    </a>
  );
};

export default Story;
