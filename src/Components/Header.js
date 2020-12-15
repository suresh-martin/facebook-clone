import React from 'react';
import './Header.css';
import Joker from './Joker.jpg';

import Facebook from '../src/Facebook.jpg';
import { PersonAdd, Search } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import Messenger from '../src/Messenger.jpg';
import Bell from '../src/Bell.jpg';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';





function Header() {
    return (
  

        <div className ='Facebook '>

<img src={Facebook} alt=" " style={{marginRight:'4px',width:'50px',height:'55px',marginTop:'-7px'}}/>

   <div className = 'search '>

     <input placeholder="search" type="text" style={{border:'none',backgroundColor:'transparent'}}/>
     <Search style={{marginLeft:'200px'}}/>


   </div>

   <div className="Avatar">

     <Avatar src="src" src={Joker}/> <h2 style={{marginLeft:'55px',marginTop:'-41px'}}>Sandy martin </h2>
     

   </div>

   <div className="create">
     
     <p>Create</p>

   </div>

   <div className="Home">

     <p> Home </p>
   </div>

  <div className=" Messenger">

  <img src={Messenger} alt="" style={{marginLeft:'45px',width:'30px',height:'35px',marginRight:'15px'}}/>


  </div>


<div className ="Bell">

<img src={Bell} alt="" style={{width:'28px',height:'28px',marginTop:'-2'}}/>

</div>

<div className=" PersonAdd">
  <PersonAdd />
</div>


<div className="Contactsupport">
  <ContactSupportIcon style={{marginRight:'25px'}}/>
</div>

<div>
<ArrowDropDownIcon style={{color:'gray'}}/>

</div>

</div>



        );
    }
    
    export default Header;