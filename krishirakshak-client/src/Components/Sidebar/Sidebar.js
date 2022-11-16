import { useContext } from "react";
import { Box, Typography, List, ListItem } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { AppContenxt } from "../../ContextApi/AppContext";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const { UserGState, dispatchUser } = useContext(AppContenxt);
  const navigate = useNavigate();
  //logout function
  const Logout = () => {
    dispatchUser({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <Box className="Sidebar">
      <List component="nav" aria-label="main mailbox folder">
      <a href="https://www.bighaat.com/collections/tractors" target="_blank" rel="noreferrer">
        <Box className="Friends">
          <Box
            className="title"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            paddingY="10px"
          >
            <Box>
              <Typography variant="h6"  color='primary'>BUY SEEDS FOR FARMING</Typography>
            </Box>
          </Box>
          <Box className="Content" display="flex" flexWrap="wrap">
            <Box display="flex">
              <img
                src="https://cdn.pixabay.com/photo/2014/07/02/06/47/wheat-381848__480.jpg"
                width="500px"
                height="270px"
                alt="friendName"
              />
            </Box>
          </Box>
        </Box>
      </a>
        <Link to="/profile">
          <ListItem button className="profilePic">
            <img src={UserGState.info.profile_pic} width="28px" height="28px" />
            <Typography variant="subtitle1">
              {UserGState.info.username}
            </Typography>
          </ListItem>
        </Link>
        <Link to="/friends">
          <ListItem button>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
              alt="groups"
              width="28px"
              height="28px"
            />
            <Typography variant="subtitle1">
              Farmers Search the Farmers accross the globe{" "}
            </Typography>
          </ListItem>
        </Link>
        <Link to="/groups">
          <ListItem button>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
              alt="groups"
              width="28px"
              height="28px"
            />
            <Typography variant="subtitle1">Groups</Typography>
          </ListItem>
        </Link>
        <ListItem button>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
            alt="groups"
            width="28px"
            height="28px"
          />
          <Typography variant="subtitle1">Marketplace</Typography>
        </ListItem>
        <ListItem button>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
            alt="groups"
            width="28px"
            height="28px"
          />
          <Typography variant="subtitle1">Desease</Typography>
        </ListItem>
        <ListItem button>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png"
            alt="groups"
            width="28px"
            height="28px"
          />
          <Typography variant="subtitle1">Retailers</Typography>
        </ListItem>
        <ListItem button onClick={Logout}>
          <ExitToAppIcon />
          <Typography variant="subtitle1">Logout</Typography>
        </ListItem>
      </List>
    </Box>
  );
};
export default Sidebar;
