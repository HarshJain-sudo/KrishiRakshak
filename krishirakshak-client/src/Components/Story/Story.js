import { Box } from "@material-ui/core";
import Profile from '../../Assets/images/profile.jpeg'
import AddIcon from '@material-ui/icons/Add';
import './Story.scss'
const Story = () => {
    return(
        <Box className="Stories" display="flex" justifyContent="center" >
            <Box className="story noStory">
                <img className="storyImg" src="https://cdn.pixabay.com/photo/2016/11/30/15/23/apples-1873078_1280.jpg" width="100%" />
                <Box className="Add" display="flex" justifyContent="center" alignItems="center">
                    <AddIcon /> 
                </Box>
                <p className="title ">Create Story</p>
            </Box>
            <Box className="story">
                <img className="storyImg" src="https://cdn.pixabay.com/photo/2014/09/19/19/09/man-452904__480.jpg" width="100%" />
                <h6 className="title">Chandrakant</h6>
                <img src="https://cdn.pixabay.com/photo/2014/09/19/19/09/man-452904__480.jpg" alt="username" width="30px" height="30px" className="userImg" />
            </Box>
            <Box className="story">
                <img className="storyImg" src="https://cdn.pixabay.com/photo/2020/07/23/01/09/field-5430070__480.jpg" width="100%" />
                <h6 className="title">Reshma</h6>
                <img src="https://cdn.pixabay.com/photo/2020/07/23/01/09/field-5430070__480.jpg" alt="username" width="30px" height="30px" className="userImg" />
            </Box>
            <Box className="story">
                <img className="storyImg" src="https://cdn.pixabay.com/photo/2019/08/09/20/52/old-man-4395870__480.jpg" width="100%" />
                <h6 className="title">Anand</h6>
                <img src="https://cdn.pixabay.com/photo/2019/08/09/20/52/old-man-4395870__480.jpg" alt="username" width="30px" height="30px" className="userImg" />
            </Box>
            <Box className="story">
                <img className="storyImg" src="https://cdn.pixabay.com/photo/2022/02/26/21/47/elephant-7036431_960_720.jpg" width="100%" />
                <h6 className="title">Rajiv</h6>
                <img src="https://cdn.pixabay.com/photo/2022/02/26/21/47/elephant-7036431_960_720.jpg" alt="username" width="30px" height="30px" className="userImg" />
            </Box>
           
        </Box>
    )
}

export default Story;