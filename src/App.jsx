import './App.css'
import Button from '@mui/material/Button';

import Sidebar from './Sidebar';
import Feed from './Feed';
import Rightbar from './Rightbar';
import { Box,Stack, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './Navbar'
import Add from './Add';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState("light");
const darkTheme= createTheme ({
  palette:{
    mode:mode
  }
})

  return (
    <ThemeProvider theme={darkTheme}>
   <Box bgcolor={"background.default"} color={"text.primary"}>
     <Navbar />
       <Stack direction="row" spacing={2} justifyContent="space-between">
         <Sidebar setMode={setMode} mode={mode}/>
         <Feed />
         <Rightbar />
       </Stack>
       <Add />
   </Box>
   </ThemeProvider>
  )
}

export default App
