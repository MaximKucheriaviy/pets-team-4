import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 280px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 608px;
    margin-bottom: 60px;
  }
`;

export const Input = styled.input`
  padding-left: 12px;
  padding-right: 44px;
  width: 100%;
  height: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #535353;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  border-style: none;

  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.37;
    letter-spacing: 0.04em;
    color: #535353;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 1.35;
    }
  }

  @media (min-width: 768px) {
    padding-left: 20px;
    height: 44px;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
`;
