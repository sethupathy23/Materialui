import React from 'react'
import {Box, ImageList, ImageListItem} from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


const Rightbar = () => {
  return (
    <Box 
     flex={2} p={2}>
     <Box sx={{position:"fixed", width:"300"}}>
      <Typography variant='h6' fontWeight={400}>Online Friends</Typography>
      <AvatarGroup  max={7}>
  <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
  <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
  <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
  <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
  <Avatar alt="Trevor Henderson" src="https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
  <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
  <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />

</AvatarGroup>
<Typography variant='h6' fontWeight={400} mt={2} mb={2}>Latest Photos</Typography>
<ImageList cols={3} rowHeight={100} gap={5}>
  <ImageListItem>
  
    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="" />
  
  </ImageListItem>
  <ImageListItem>
  
  <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" alt="" />

</ImageListItem>
<ImageListItem>
  
  <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt="" />

</ImageListItem>
<ImageListItem>
  
  <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" alt="" />

</ImageListItem>
<ImageListItem>
  
  <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8" alt="" />

</ImageListItem>
<ImageListItem>
  
  <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62" alt="" />

</ImageListItem>
 
</ImageList>
<Typography variant='h6' fontWeight={400} mt={2} mb={2}>
  Latest Conversations
  </Typography>
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

     </Box>
      </Box>
  )
}

export default Rightbar