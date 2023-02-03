import { styled } from "@mui/material/styles";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";

export const BoxAddPet = styled(Box)`
    display: flex;
    align-items: center;
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

export const TextAddPet = styled(Typography)`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  margin-right: 12px;
`;

export const IconAddPet = styled(AiOutlinePlus)`
  width: 25px;
  height: 25px;
  color: white;
`;