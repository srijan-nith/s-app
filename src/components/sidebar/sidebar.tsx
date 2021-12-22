/* 
  अभी अभी दिल की सुनी है 
  अभी ना करो ज़माने की बात 
  अभी अभी बातें रुकी हैं 
  अभी अभी दोहराने की बात
*/
import * as React from 'react';
import { Box, useTheme } from "@mui/system"
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import BrushIcon from '@mui/icons-material/Brush';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { Divider, Button } from "@mui/material";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'black',
    boxShadow: theme.shadows[4],
    fontSize: 20,
    width: '100px',
    height: '40px',
    textAlign: 'center'
  },
}));

export function Sidebar(): JSX.Element {

const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };




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
        display: 'flex',
        my: 2
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

        <LightTooltip title="Home" placement="right">
          <HomeIcon
            sx={{
              color: theme.palette.primary.main,
              height: 40,
              width: 40,
              m: 2
            }}
          />
        </LightTooltip>
        
        <LightTooltip title="Team" placement="right">
          <GroupsIcon
            sx={{
              color: theme.palette.primary.main,
              height: 40,
              width: 40,
              m: 2
            }}
          />
        </LightTooltip>
        
        <LightTooltip title="Contact Us" placement="right">
          <ContactsIcon
            sx={{
              color: theme.palette.primary.main,
              height: 40,
              width: 40,
              m: 2
            }}
          />
        </LightTooltip>
        
        <LightTooltip title="ArtWorks" placement="right">
          <BrushIcon 
            sx={{
              color: theme.palette.primary.main,
              height: 40,
              width: 40,
              m: 2
            }}
          />
        </LightTooltip>
        
        <LightTooltip title="Articles" placement="right">
          <ArticleIcon 
            sx={{
              color: theme.palette.primary.main,
              height: 40,
              width: 40,
              m: 2
            }}
          />
        </LightTooltip>      
      </Box>
      <Divider sx={{ mt: 2, mb: 2, height: '96vh' }} color='gray' orientation="vertical" />
    </Box>
  )
}

// TODO: Add menu items
// TODO: Make them do what menu items do