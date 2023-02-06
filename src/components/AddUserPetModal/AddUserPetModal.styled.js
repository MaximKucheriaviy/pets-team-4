import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";
import { TfiPlus } from "react-icons/tfi";
import { CgClose } from "react-icons/cg";

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 280px;
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 20px 40px 20px;

  & button:not(:last-child) {
    margin-bottom: 12px;
  }
  & input:not(:last-child) {
    margin-bottom: 16px;
  }
  // & input:last-of-type {
  //   margin-bottom: 40px;
  // }
  @media screen and (min-width: 768px) {
    width: 608px;
    padding-left: 80px;
    padding-right: 80px;
    & input:not(:last-child) {
      margin-bottom: 28px;
    }
  }
`;

export const FormTitle = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #111111;
  text-align: center;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const InputLabel = styled.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #111111;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 12px;
  }
`;
export const TextAreaLabel = styled.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #111111;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-left: 27px;
    margin-bottom: 12px;
  }
`;

export const FileInputLabel = styled.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const FormInput = styled(Field)`
  width: 240px;
  height: 40px;
}
  border: 1px solid #f5925680;
  border-radius: 40px;
  font-size: 14px;
  padding: 11px 21px 12px 14px;
  outline: none;
  margin-bottom: 16px;
  transition: border 250ms linear;
  &:hover {
    border: 2px solid #f5925680;
  }
  &:focus {
    border: 2px solid #f5925680;
  }
  @media screen and (min-width: 768px) {
    width: 448px;
    height: 48px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FormButton = styled.button`
  width: 240px;
  height: 40px;
  left: 20px;
  top: 450px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  transition: background-color 250ms linear;
  &:hover {
    background: #f59256;
    border-radius: 40px;
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 180px;
    height: 44px;
    font-size: 20px;
  }
`;

export const FormTextArea = styled(Field)`
  width: 240px;
  background: #fdf7f2;
  height: 100px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  outline: none;
  transition: border 250ms linear;
  padding: 12px 14px;
  margin-bottom: 24px;
  resize: none;

  &:hover {
    border: 2px solid #f5925680;
  }
  &:focus {
    border: 2px solid #f5925680;
  }
  @media screen and (min-width: 768px) {
    width: 394px;
    margin-left: auto;
    margin-right: auto;
    height: 116px;
  }
`;

export const InputLabelFile = styled.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #111111;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
  }
`;
export const FileInput = styled(Field)`
  width: 208px;
  height: 208px;
  background: #fdf7f2;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
  opacity: 0;
  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
  }
`;

export const HiddenInput = styled.span`
  width: 208px;
  height: 208px;
  background: #fdf7f2;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
  }
`;

export const PlusIcon = styled(TfiPlus)`
  position: absolute;
  width: 48px;
  height: 48px;
  top: 220px;
  left: 115px;
  @media screen and (min-width: 768px) {
    top: 220px;
    left: 280px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
  }
`;

export const CloseButton = styled.button`
  padding: 6px;
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  background: #fdf7f2;
  position: absolute;
  top: 20px;
  right: 20px;
  &:hover {
    background: #f59256;
  }
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const CloseIcon = styled(CgClose)`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const ErrorNotification = styled.div`
  font-family: "Manrope";
  color: red;
`;

export const Ovarlay = styled.div`
  width: 208px;
  height: 208px;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
`;
