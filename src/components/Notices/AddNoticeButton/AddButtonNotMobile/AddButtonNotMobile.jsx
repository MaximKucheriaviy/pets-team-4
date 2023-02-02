import { IconButton } from '@mui/material'
import React from 'react'
import { IconButtonWrapper, StyledAddNotice, Title } from './AddButtonNotMobile.styled'
import AddIcon from '@mui/icons-material/Add';


export default function AddButtonNotMobile() {
  return (
          <StyledAddNotice>
              <Title>Add pet</Title>
              <IconButtonWrapper>
                    <IconButton   
                  sx={{
                      color: "white",
                    //   backgroundColor: "#F59256",
                      width: "44px",
                      height: "44px"
               }}
              >
                  <AddIcon sx={{
                      width: "30px",
                      height: "30px"
                  }} />
                  </IconButton>
                </IconButtonWrapper>
            </StyledAddNotice>
  )
}
