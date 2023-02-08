import { styled } from "@mui/material/styles";

import { AiOutlinePlus } from "react-icons/ai";
import {
  Box,
  Button,
  Typography,
  IconButton
} from "@mui/material";

export const BoxAddPet = styled(Box)`
    display: none;

    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
    }
`;

export const BtnAddPet = styled(Button)`
  min-width: 0;
  padding: 10px;
  border-radius: 50%;
  background: #F59256;
  
  &:hover {
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 
    0px 2px 2px 0px rgb(0 0 0 / 14%), 
    0px 1px 5px 0px rgb(0 0 0 / 12%);
    background-color: #F59256;
  }

  @media screen and (min-width: 768px) {
    
  }
`;

export const BtnAddPetMob = styled(IconButton)`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  background-color: #F59256;
  color: white;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: fixed;
  z-index: 20;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.2);
  right: 20px;
  bottom: 80px;

  /* @media screen and (min-width: 550px) {
    right: 80px;
  } */

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TextAddPet = styled(Typography)`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  margin-right: 12px;
  color: grey;
`;

export const IconAddPet = styled(AiOutlinePlus)`
  
  width: 32px;
  height: 32px;
  color: white;

  @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;