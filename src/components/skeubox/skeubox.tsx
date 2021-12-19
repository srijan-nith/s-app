/* 
  Let me watch you as close as a memory
  Let me hold you above all the misery
  Let me open my eyes and be glad that I got here
*/

import React from "react"
import { Box, SxProps, Theme } from "@mui/material"

type SkeuboxPropType = {
  sx?: SxProps<Theme>;
  children: JSX.Element;
}

export function Skeubox(props: SkeuboxPropType): JSX.Element {
  return (
    <Box
      sx={{
        ...props.sx,
        boxShadow: 
          '-10px -10px 15px rgba(0, 0, 0, 0.15), 10px 10px 15px rgba(255, 255, 255, 0.03)',
        border: '8px solid #231F20',
      }}
    >
      {props.children}
    </Box>
  )
}