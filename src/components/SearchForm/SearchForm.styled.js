import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 280px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 608px;
  }
`;

export const Input = styled.input`
  padding-left: 12px;
  padding-right: 44px;
  width: 100%;
  height: 40px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #535353;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  border-style: none;
  outline: 1px solid transparent;
  transition: outline 250ms ease-in-out;

  &:focus {
    outline-color: rgba(245, 146, 86, 0.5);
  }

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
    font-size: 20px;
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

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }

  & > svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.black};

    @media (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;
