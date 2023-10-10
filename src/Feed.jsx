import React from 'react'
import {Box} from '@mui/material';


import Post from './Post';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Feed = () => {
  return (
    <Box  flex={4} p={2}>
    <Post />
    <Post img={<img src='https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyJTIwYW5kJTIwbGVhZiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>}/>

    <Post />
    <Post />
    <Post />

    </Box>
  )
}

export default Feed