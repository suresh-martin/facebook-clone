import { Typography } from '@material-ui/core';
import React from 'react';
import './Message.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Avatar } from '@material-ui/core';
import Jerry from './Jerry.jpg';
import Tom from './Tom.jpg';
import Bheem from './Bheem.jpg';
import Lipstick from '../src/Lipstick.jpg';
import Cream from '../src/Cream.jpg';
import Mens from '../src/Mens.jpg';
import Makeup  from '../src/Makeup.jpg';
import Easy from '../src/Easy.jpg';








    function Message() {

    return (

        <div className="Mainstory">

            <div className="Story" style={{ display: 'flex', marginTop: '25px',marginLeft:'20px' }}>
                <h3 style={{ marginLeft: '10px',marginTop:'-18px' }}>Stories</h3>
                <Typography style={{ marginLeft: '150px',color:'navy' ,marginTop:'-18px'}}>See All</Typography>
            </div>

            <div className="StoryIcon" >
                <AddCircleIcon style={{fontSize:'50px',color:'navy',marginLeft:'28px',marginTop:'9px'}}
 />
                <Avatar  src="src" src={Jerry} style={{margin:'15px',border:'4px solid #002984'}}/>
                <Avatar  src="src" src={Tom} style={{margin:'15px',border:'4px solid #002984'}}/>
                <Avatar  src="src" src={Bheem}  style={{margin:'15px',border:'4px solid #002984'}}/>

            </div>


            <div className="Price" >

                <h3  style={{marginLeft:'10px'}}>Recently viewed</h3>

                </div>

                <div className="Sales">
           
            <img src={Lipstick} style={{ width: '130px', marginLeft: '20px',marginTop:'-25px',height:'20vh',borderRadius:'5px' }} />
            <img src={Mens}  style={{ width: '130px', marginLeft: '25px',marginTop:'-25px',height:'20vh',borderRadius:'5px' }} />

            </div>
            
            <div className="Rate">

                <img src={Makeup} style={{ width: '130px', marginLeft: '20px',marginTop:'50px' ,height:'20vh',borderRadius:'5px'
                  ,marginTop:'90px'}}/>
                <img src={Cream} style={{ width: '130px', marginLeft: '25px' ,height:'20vh',marginTop:'90px',borderRadius:'5px' }}/>

            </div>

            <div classname="Look" style={{display:'flex',backgroundColor:'white',marginTop:'10px',height:'30px'}}>
                <h3 style={{marginLeft:'10px'}}>Sponscared</h3>
               <Typography style={{color:'blue',marginTop:'20px',marginLeft:'120px'}}>Create Ad</Typography>
            </div>

            <div className="Make">

             <img src={Easy} style={{width: '250px',marginLeft:'25px',borderRadius:'15px',marginTop:'25px'}}/>
             <h3 style={{marginLeft:'10px'}}>Skincare Stuff</h3>
             <Typography style={{color:'gray',marginLeft:'10px'}}>Skincarestuff.com</Typography>

            </div>




        </div>


    );
}

export default Message;