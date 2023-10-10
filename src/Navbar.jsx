import { Pets } from '@mui/icons-material'
import { AppBar, styled,Toolbar,Typography,Box,InputBase, Badge, Avatar,Menu} from '@mui/material'
import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';

import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",

})

const Search= styled("div")(({theme}) => ({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}));

const Icons= styled(Box)(({theme}) => ({
display:"none",
gap:"20px", 
alignItems:"center",
[theme.breakpoints.up("sm")]:{
  display:"flex",
}
}));
const UserBox= styled(Box)(({theme}) => ({
  display:"flex",
  gap:"20px", 
  alignItems:"center",
  [theme.breakpoints.up("sm")]: {
    display:"none"
  }
  }));


const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
      <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>Sethu</Typography>
      <PetsIcon sx={{display:{xs:"block", sm:"none"}}}/>
      <Search><InputBase placeholder="search..."/></Search>
      <Icons>
        <Badge badgeContent={4} color="error">
        <MailIcon color="white" />
        </Badge>
        <Badge badgeContent={4} color="error">
        <NotificationsIcon color="white" />
        </Badge>
        <Avatar sx={{width:40, height:40}}src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        onClick={(e)=> setOpen(true) }
        />
      </Icons>
      <UserBox onClick={(e) =>setOpen(true)}>
        <Avatar 
        sx={{width:30, height:30}}
        src='https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        />
        <Typography varaint="span">John</Typography>
      </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
      
        open={open}
        onClose={(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
  )
}

export default Navbar