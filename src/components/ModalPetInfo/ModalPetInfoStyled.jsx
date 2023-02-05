import styled from "styled-components";

export const Backdrop = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
  backdrop-filter: blur(5px);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  padding-bottom: 40px;
  width: 280px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  & h3 {
    margin-bottom: 16px;

    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.01em;
  }
  & table {
    & tr {
      &:not(:last-child) {
        & td {
          padding-bottom: 4px;
        }
      }
      &:not(:first-child) {
        & td {
          padding-top: 4px;
        }
      }
      /* outline: 2px solid green; */
    }
  }
`;

export const Key = styled.td`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
`;

export const Value = styled.td`
  width: 50%;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
`;
