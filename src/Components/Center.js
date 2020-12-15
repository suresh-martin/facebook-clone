import { Typography } from '@material-ui/core';
import React from 'react';
import './Center.css';
import Avatar from '@material-ui/core/Avatar';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { PersonAdd } from '@material-ui/icons';
import Enjoy from '../src/Enjoy.jpg';
import Day from '../src/Day.jpg';
import Fun from '../src/Fun.jpg';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import Work from '../src/Work.jpg';
import Idea from '../src/Idea.jpg';
import Ten from '../src/Ten.jpg';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Joker from './Joker.jpg';
import Romans from './Romans.jpg';
import Office from './Office.jpg';

function Center() {
    return (

        <div className="Main">


            <div className="icons">
                <Avatar src="src" src={Joker}style={{ marginTop: '20px', marginLeft: '25px' }} />
                 <Typography style={{ marginLeft: '20px',  marginTop: ' 19px',color:'gray' }} >What's on your mind Sandy martin ?</Typography>
            </div>

            <div className="Lables">
                <PhotoLibraryIcon style={{ color: 'skyblue' }} />
                <h3 style={{marginLeft:'10px'}}>Photo/video</h3>
                <PersonAdd style={{ color: 'orange',marginLeft:'55px'}} />
                <h3 style={{marginLeft:'10px'}}>Tag friends</h3>
                <EmojiEmotionsIcon style={{ color: 'yellow',marginLeft:'55px' }} />
                <h3 style={{marginLeft:'10px'}}>Feeling/Activity</h3>
                <MoreHorizIcon style={{marginLeft:'50px'}}/>
            </div>


            <div className="Posting">

                <Avatar src="src" src={Romans} style={{ marginLeft: '10px', marginTop: '15px' }} />
                <h3 style={{ marginTop: '15px', marginLeft: '10px' }}>Sandy martin</h3>
                <MoreHorizIcon style={{marginLeft:'450px',marginTop:'8px',color:'gray'}}/>

            </div>
            <div className="Thought">
                <Typography style={{ marginLeft: '58px', marginTop: '-195px', color: 'silver' }}>a minute ago</Typography>
                <Typography style={{ marginTop: '10px', marginLeft: '15px' }}>Realx and quality time with my self.
                     Good time good place.   </Typography>


            </div>

            <div className="images" >

                <img src={Enjoy} style={{ width: '200px', marginLeft: '-20px',padding:'35px',marginTop:'-25px',borderRadius:'5px'}} />

                <img src={Fun} style={{ width: '200px',  marginLeft: '-49px',padding:'35px',marginTop:'-25px'   }} />
                <img src={Day} style={{ width: '200px',  marginLeft: '-49px',padding:'33px' ,marginTop:'-20px',opacity: '0.7'  }} />
               

            </div>

            
           


            
            <div className="Likes">

                <ThumbUpAltIcon style={{ color: 'blue', marginLeft: '13px', marginTop: '10px' }} /><Typography style={{ marginTop: '10px',marginLeft:'2px' }}>230</Typography>
                <ChatBubbleOutlineIcon style={{ color: 'gray', marginLeft: '25px', marginTop: '10px' }} /><Typography style={{ color: 'gray', marginLeft: '5px', marginTop: '10px' }}>4</Typography>
                <ShareIcon style={{ color: 'gray', marginLeft: '40px', marginTop: '10px' }} /><Typography style={{ color: 'gray', marginLeft: '5px', marginTop: '10px' }}>30</Typography>


            </div>



            <div className="Bussiness">

                <Avatar src="src" src={Office} style={{ marginLeft: '10px', marginTop: '15px' }} />
                <h3 style={{ marginTop: '15px', marginLeft: '10px' }}>Bdi plus</h3>
                <MoreHorizIcon style={{marginLeft:'500px',marginTop:'8px',color:'gray'}}/>

            </div>


            <div className="Read">
                <Typography style={{ marginLeft: '58px', marginTop: '-195px', color: 'silver' }}>a minute ago</Typography>
                <Typography style={{ marginTop: '10px', marginLeft: '15px' }}>I have Good partner and good team.
                              Thanks for Today team.  </Typography>



            </div>

            <div className="Maintain">

                <img src={Work} style={{ width: '200px', borderRadius: '10px', marginLeft: '-28px',padding:'35px',marginTop:'-25px' }} />

                <img src={Ten} style={{ width: '200px', borderRadius: '10px', marginLeft: '-51px',padding:'35px',marginTop:'-25px' }} />
                <img src={Idea} style={{ width: '200px', borderRadius: '10px', marginLeft: '-51px',padding:'35px',marginTop:'-25px' }} />



            </div>


            <div className="Share">

                <ThumbUpAltIcon style={{ color: 'blue', marginLeft: '10px', marginTop: '10px' }} /><Typography style={{ marginTop: '10px' }}>147</Typography>
                <ChatBubbleOutlineIcon style={{ color: 'gray', marginLeft: '25px', marginTop: '10px' }} /><Typography style={{ color: 'gray', marginLeft: '5px', marginTop: '10px' }}>7</Typography>
                <ShareIcon style={{ color: 'gray', marginLeft: '40px', marginTop: '10px' }} /><Typography style={{ color: 'gray', marginLeft: '5px', marginTop: '10px' }}>12</Typography>




            </div>






        </div>




    );
}

export default Center;