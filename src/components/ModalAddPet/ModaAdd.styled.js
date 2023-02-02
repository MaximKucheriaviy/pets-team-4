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

  &:hover, :focus, :active {
    color: #F59256;
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
  border-color: #F59256;
  background: #FDF7F2;
  resize: none;
  width: 240px;
  height: 40px;
  padding: 11px 11px;
  margin-top: 8px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.1;
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
`