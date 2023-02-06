import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  right: 20px;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;

  & > svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
