import styled from "styled-components";
import { Field } from "formik";
import { Link } from "react-router-dom";

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;

  padding: 40px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;

  width: 618px;

  @media screen and (min-width: 769px) and (max-width: 1280px) {
    width: 608px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    width: 100%;
    border: 0px;
    box-shadow: none;
    background: transparent;
  }
`;

export const Title = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 49px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Item = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  position: relative;
  width: 458px;
  height: 52px;
  padding-left: 32px;
  padding-right: 32px;

  background: #FDF7F2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  @media screen and (min-width: 769px) and (max-width: 1280px) {
    width: 448px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40px;
    font-size: 14px;
    line-height: 19px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 32px;
  margin-bottom: 16px;

  width: 458px;
  height: 48px;

  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 40px;
cursor:pointer;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }
  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }

  @media screen and (min-width: 769px) and (max-width: 1280px) {
    width: 448px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Error = styled.div`
  position: absolute;
  padding-top: 2px;
  padding-left: 32px;
  color: red;
  font-size: 12px;
`;

export const Hint = styled.p`
  display: block;
  padding: 20px;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.colors.gray};
`;

export const HintLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blueLinks};
`;

export const FormHead = styled.div`
  position: relative;
  margin-top: 60px;
  margin-bottom: 40px;
`;
