import React from 'react'
import {Fab,Tooltip,styled,Typography, Avatar, Stack} from '@mui/material'
import {Add as AddICon} from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';

import Modal from '@mui/material/Modal';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
const StyledModal=styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox=styled(Box)({
    display:"flex",
    alignItems:"center",
 gap:"10px",
 mb:"20px"
})


const Add = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
         <Tooltip onClick={(e)=>setOpen(true)}
         title="ADD" sx={{position:'fixed', bottom:20}}>
         <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
    </Tooltip>
    <StyledModal
        open={open}
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
         <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
        <UserBox>
            <Avatar
            src='https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
            sx={{width:30 ,height:30}}
            />
            <Typography fontWeight={500} variant='span'>John Doe</Typography>
        </UserBox>
        <TextField
        sx={{width:"100%"}}
          id="standard-multiline-static"
     
          multiline
          rows={3}
          placeholder="What's on your mind"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
        <EmojiEmotionsIcon color='primary'/>
        <ImageIcon color='secondary'/>
        <VideoCameraBackIcon color='success'/>
        <PersonAddIcon color='error'/>



        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
      <Button>Post</Button>
  
    </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add