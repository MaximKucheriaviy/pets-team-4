import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import { TfiPlus } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

export const ModalBox = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  padding: 20px 20px 40px 20px;
  width: 280px;
  background: ${props => props.theme.colors.white};
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 40px 80px 40px 80px;
  }
`;

export const Title = styled.p`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 24px;
  line-height: 1.35;
  text-align: center;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 36px;
  }
`;

export const SubtitleText = styled.p`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.04em;
  text-align: center;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.35;
    margin-bottom: 30px;
  }
`;

export const RadioButton = styled.button`
  padding: 8px 28px;
  border: 2px solid #F59256;
  color: ${props => props.theme.colors.black};
  border-radius: 40px;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover, :focus {
    box-shadow: 0px 2px 1px -2px rgb(0 0 0 / 20%), 
    0px 2px 2px 0px rgb(0 0 0 / 14%), 
    0px 1px 5px 0px rgb(0 0 0 / 12%);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const BtnGoLogin = styled(NavLink)`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.04em;
  text-transform: none;
  padding-top: 9px;
  padding-bottom: 9px;
  border: none;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  border-radius: 40px;
  margin-top: 12px;
  background:  ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 
      0px 2px 2px 0px rgb(0 0 0 / 14%), 
      0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  
  &:active, :hover, :focus {
    background:  ${props => props.theme.colors.accent};
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 
        0px 4px 5px 0px rgb(0 0 0 / 14%), 
        0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  @media screen and (min-width: 768px){
    width: 180px;
    justify-content: space-around;
    font-size: 20px;
    margin-top: 0px;
  }
`;

export const BtnNextDone = styled.button`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.04em;
  text-transform: none;
  padding-top: 9px;
  padding-bottom: 9px;
  border: none;
  outline: none;
  border-radius: 40px;
  margin-bottom: 12px;
  background:  ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 
      0px 2px 2px 0px rgb(0 0 0 / 14%), 
      0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  
  &:disabled {
    background: ${props => props.theme.colors.background};
    border-color: rgba(0,0,0, 0.4);
  }
  
  &:active, :hover, :focus {
    background:  ${props => props.theme.colors.accent};
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 
        0px 4px 5px 0px rgb(0 0 0 / 14%), 
        0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  @media screen and (min-width: 768px){
    width: 180px;
    justify-content: space-around;
    font-size: 20px;
    margin-bottom: 0px;
  }
`;

export const BtnBackCancel = styled.button`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.04em;
  text-transform: none;
  outline: none;
  padding-top: 9px;
  padding-bottom: 9px;
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.white};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover, :focus {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 
      0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  @media screen and (min-width: 768px){
    font-size: 20px;
    width: 180px;
  }
`;

export const ModalBoxSecond = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  background: ${props => props.theme.colors.white};
  padding: 20px 20px 40px 20px;
  width: 280px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 40px 80px 40px 80px;
  }
`;

export const BtnUploadPhoto = styled.button`
  padding: 34px;
  background: ${props => props.theme.colors.background};
  border-radius: 20px;
  border: none;
  outline: none;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 
      0px 2px 2px 0px rgb(0 0 0 / 14%), 
      0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  
  &:hover, :focus {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 
      0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  @media screen and (min-width: 768px) {
    padding: 44px;
  }
`;

export const WrapInputFirst = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
  }
`;

export const RadioBtnSex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-right: 40px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;  
  color: ${props=> props.theme.colors.black};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  
  &:hover, :focus, :active {
    color: ${props=> props.theme.colors.accent};
  }
`;

export const IconAddPhoto = styled(TfiPlus)`
  width: 60px;
  height: 60px;
  color: ${props=> props.theme.colors.gray};
`;

export const BtnModalClose = styled.button`
  display: block;
  min-width: 0;
  line-height: 0;
  margin-left: auto;
  padding: 0;
  border: none;
  border-radius: 50%;
  outline: none;
  background: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  
  &:focus, :hover {
    background: none;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%),
      0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
`;

export const IconModalClose = styled(CloseIcon)`
  border-radius: 50%; 
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.black};
  min-width: 34px;
  min-height: 34px;
  
  &:focus, :hover {
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: 2px 2px 10px 1px rgb(0 0 0 / 15%),
     0px 2px 2px 0px rgb(0 0 0 / 14%),
     0px 1px 3px 0px rgb(0 0 0 / 12%);
  }

  @media screen and (min-width: 768px) {
    min-width: 44px;
    min-height: 44px;
  }
`;

export const LabelText = styled.label`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 18px;
  line-height: 1.44;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.2;
    margin-bottom: 12px;
  }
`;

export const InputAddPet = styled.input`
  font-family: "Manrope";
  font-weight: 400;
  font-size: 14px;
  line-height: 1.44;
  width: 240px;
  height: 40px;
  border-radius: 40px;
  color: ${props=> props.theme.colors.gray};
  border: 1px solid rgba(245, 146, 86, 0.5);
  background: ${props=> props.theme.colors.background};
  padding: 11px 11px;
  margin-bottom: 16px;

  &:hover {
    border-color: ${props=> props.theme.colors.accent};
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  &:focus, :active {
    outline: none !important;
    border-color: ${props=> props.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    width: 448px;
    height: 48px;
    margin-bottom: 28px;
    font-size: 16px;
    line-height: 1.6;
  }  
`;

export const LabelTextSex = styled.p`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 18px;
  line-height: 1.44;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.1;
  }
`;

export const SkeletPhotoBox = styled.div`
  width: 116px;
  height: 116px;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

export const BoxUploadPhoto = styled.div`
  margin-bottom: 20px;

   @media screen and (min-width: 768px) {
    margin-bottom: 28px;
   }
`;

export const TextComment = styled.textarea`
  font-family: "Manrope";
  font-weight: 400;
  font-size: 14px;
  line-height: 1.44;
  border-radius: 40px;
  color: rgba(27, 27, 27, 0.6);
  border: 1px solid rgba(245, 146, 86, 0.5);
  background: ${props=> props.theme.colors.background};
  resize: none;
  width: 240px;
  height: 40px;
  padding: 11px 11px;
  margin-top: 8px;
  margin-bottom: 40px;

  &:hover {
    border-color: ${props=> props.theme.colors.accent};
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  &:focus, :active {
    outline: none !important;
    border-color: ${props=> props.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.6;
    width: 448px;
    height: 113px;
    border-radius: 20px;
  }
`;

export const WraperBtnsPage = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;

export const ImagePrewiew = styled.img`
  width: 116px;
  height: 116px;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;