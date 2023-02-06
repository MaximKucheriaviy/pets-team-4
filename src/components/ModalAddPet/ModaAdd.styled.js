import styled from "styled-components";

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
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;  

  &:hover, :focus, :active {
    color: ${props=> props.theme.colors.accent};
  }
`;

export const LabelText = styled.label`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 18px;
  line-height: 1.44;
  margin-bottom: 8px;

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
  color: rgba(27, 27, 27, 0.6);
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