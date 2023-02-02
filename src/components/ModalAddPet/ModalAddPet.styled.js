import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Typography,
  Modal,
  OutlinedInput
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CloseIcon from '@mui/icons-material/Close';
import { TfiPlus } from "react-icons/tfi";
import { ReactComponent as Male } from "../../images/sex-male.svg";
import { ReactComponent as Female } from "../../images/sex-female.svg";

export const ModalForm = styled(Modal)`
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  overflow: scroll;
`;

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px 20px 40px 20px;
  width: 280px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 40px 80px 40px 80px;
  }
`;

export const FlexBox = styled(Box)`
  display: flex;
  flex-direction:column;
`;

export const InputAddPet = styled(OutlinedInput)`
  width: 240px;
  border-radius: 40px;
  color: rgba(27, 27, 27, 0.6);
  border-color: #F59256;
  height: 40px;
  margin-bottom: 16px;
  background: #FDF7F2;

  &:hover, :focus, :active {
    border-color: #F59256
  }

  @media screen and (min-width: 768px) {
    width: 448px;
    height: 48px;
    margin-bottom: 28px;
  }  
`;

export const Title = styled(Typography)`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 24px;
  line-height: 1.35;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 36px;
  }
`;

export const SubtitleText = styled(Typography)`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.04em;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.35;
    margin-bottom: 30px;
  }
`;

export const RadioBoxBtnSex = styled(Grid2)`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const IconMale = styled(Male)`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

export const IconFemale = styled(Female)`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

export const RadioButton = styled(Button)`
  padding: 8px 28px;
  border: 2px solid #F59256;
  color: black;
  border-radius: 40px;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  text-transform: lowercase;

  &:active, :hover, :focus {
    background: #F59256;
    color: white;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const BtnNextDone = styled(Button)`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.04em;
  text-transform: none;
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 40px;
  margin-bottom: 12px;
  background: #F59256;
  color: white;
  
  &:disabled {
    background: #fbe9e7;
    border-color: rgba(0,0,0, 0.4);
  }
  
  &:active, :hover, :focus {
    background-color: #F59256;
  }

  @media screen and (min-width: 768px){
    width: 180px;
    justify-content: space-around;
    font-size: 20px;
    margin-bottom: 0px;
  }
`

export const BtnBackCancel = styled(Button)`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.04em;
  text-transform: none;
  padding-top: 9px;
  padding-bottom: 9px;
  border: 2px solid #F59256;
  border-radius: 40px;
  color: black;

  @media screen and (min-width: 768px){
    font-size: 20px;
    width: 180px;
  }
` 

export const ModalFormSecond = styled(Modal)`
  overflow: scroll;
`;

export const ModalBoxSecond = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px 20px 40px 20px;
  width: 280px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 40px 80px 40px 80px;
  }
`;

export const IconModalClose = styled(CloseIcon)`
  border-radius: 50%; 
  background-color: #FDF7F2;
  color: black;
`;

export const BtnUploadPhoto = styled(Button)`
  padding: 34px;
  background: #FDF7F2;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    padding: 44px;
  }
`;

export const IconAddPhoto = styled(TfiPlus)`
  width: 60px;
  height: 60px;
  color: rgba(17, 17, 17, 0.6);
`

export const BtnModalClose = styled(Button)`
  display: block;
  min-width: 0;
  line-height: 0;
  margin-left: auto;
  padding: 0;
`;
