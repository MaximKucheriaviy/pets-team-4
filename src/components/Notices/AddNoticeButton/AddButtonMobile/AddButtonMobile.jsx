import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { StyledAddNotice, Wrapper } from './AddButtonMobile.styled';


export default function AddButtonMobile() {
  return (
          <Wrapper >
              <StyledAddNotice>
                    <IconButton   
                  sx={{
                   display: "flex",
                   flexDirection: "column",
                      color: "currentColor",
                      fontSize: "12px",
                      lineHeight: "16px",
                      backgroundColor: "#F59256",
                      width: "80px",
                      height: "80px"
               }}
              >
                  <AddIcon sx={{
                      width: "40px",
                      height: "40px"
                  }} /> Add pet
              </IconButton>
            </StyledAddNotice>
            </Wrapper>
  )
}
