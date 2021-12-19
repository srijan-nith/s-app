/* 
  अभी अभी दिल की सुनी है 
  अभी ना करो ज़माने की बात 
  अभी अभी बातें रुकी हैं 
  अभी अभी दोहराने की बात
*/

import { Box, useTheme } from "@mui/system"
import React from "react"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Divider } from "@mui/material";

export function Sidebar() : JSX.Element {
  const theme = useTheme();
  console.log(theme.palette.primary.main)
  return (
    <Box
      id='sidenav'
      sx={{
        position: 'absolute',
        height: '100vh',
        top: '0px',
        left: '0px',
        width: '75px',
        display: 'flex'
      }}
    >
      <Box
        id='sidenav-icons'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center'
        }}
      >
        {/* <AcUnitIcon 
          sx={{
            color: theme.palette.primary.main,
            height: 40,
            width: 40,
            mt: 2
          }}
        /> */}
      </Box>
        {/* <Divider sx={{mt: 2, mb: 2, height: '96vh'}} color='gray' orientation="vertical" /> */}
    </Box>
  )
}

// TODO: Add menu items
// TODO: Make them do what menu items do