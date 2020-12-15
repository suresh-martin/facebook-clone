import React from 'react';
import './Feeds.css';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import GroupIcon from '@material-ui/icons/Group';
import EventNoteIcon from '@material-ui/icons/EventNote';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Typography } from '@material-ui/core';

function Feeds() {
    return (


        <div className="Maindiv">

            <div className="Icondiv">

                <MenuBookIcon style={{marginTop:'30px'}} />
                <MailOutlineIcon style={{marginTop:'30px'}} />
                <OndemandVideoIcon style={{marginTop:'30px'}} />
                <i class='fas fa-balance-scale' style={{ fontsize: '36px',marginTop:'30px' }}></i>
                <i class='fas fa-donate' style={{ fontsize: '36px',marginTop:'110px' }}></i>

                <EmojiFlagsIcon style={{marginTop:'40px'}} />
                <GroupIcon  style={{marginTop:'40px'}}/>
                <EventNoteIcon style={{marginTop:'40px'}} />
                <BookmarkBorderIcon style={{marginTop:'40px'}} />

            </div>
            

            <div className="lablediv">

                <Typography style={{marginLeft:'10px',marginTop:'30px'}}>News Feeds</Typography>
                <Typography style={{marginLeft:'10px',marginTop:'30px'}}>Message</Typography>
                <Typography style={{marginLeft:'10px',marginTop:'30px'}}>Watch</Typography>
                <Typography style={{marginLeft:'10px',marginTop:'30px'}}>Marketplace</Typography>
         
                 <h3 style={{marginTop:'30px'}} variant='h8'> Explore</h3>

                <Typography style={{marginLeft:'10px',marginTop:'28px'}}>Fundraisers</Typography>
                <Typography style={{marginLeft:'10px',marginTop:'38px'}}>Pages</Typography>
                <Typography style={{marginLeft:'10px',marginTop:'38px'}}>Groups</Typography>
                <Typography style={{marginLeft:'10px',marginTop:'38px'}}>Events</Typography>
                <Typography style={{marginLeft:'10px',marginTop:'38px'}}>Saved</Typography>

                 <Typography color='primary'style={{marginTop:'30px'}}>See more</Typography>

            </div>


        </div>




    );
}

export default Feeds;