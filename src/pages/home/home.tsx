/* 
  I hope you know we had everything
  And you broke me and left these pieces
  I want you to hurt like you hurt me today and
  I want you to lose like I lose when I play what could have been
  Oh, what could have been 
*/

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Skeubox } from "../../components/skeubox/skeubox";

export function Home() : JSX.Element {
  // console.log('hello bro')
  const theme = useTheme();
  return (
    <Box
      sx={{          
        display: 'flex',
        height: '100vh',
        width: '100%',
        fontFamily: 'Lato',
        // backgroundColor: 'common.black',
        backgroundColor: theme.palette.common.black,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 200,
        fontSize: 40,
        color: 'common.white' ,
        flexDirection: 'column',
        overflow: 'auto',
      }}
    >
      {/* <Sidebar/> */}
      <Skeubox
        sx={{
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2          
        }}
      >
        <>
          <img
            src='/srijan.png'
            width='480rem'
          />
          <Typography 
            color={theme.palette.common.white}
            sx={{
              fontSize: 40,
              fontFamily: 'Lato',
              fontWeight: '200'
            }}
          >
            SRIJAN
          </Typography>
          <Typography 
            // color={theme.palette.common.white}
            color='GrayText'
            sx={{
              fontSize: 13,
              fontFamily: 'Lato',
              fontWeight: '500'
              
            }}
          >
            Coming Soon
          </Typography>
        </>
      </Skeubox>
    </Box>
  )
}