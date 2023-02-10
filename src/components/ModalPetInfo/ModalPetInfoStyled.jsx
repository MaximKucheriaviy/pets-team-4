import styled from "styled-components";

export const Backdrop = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #000000b3;
  backdrop-filter: blur(10px);
  overflow-y: scroll;

  color: ${({ theme }) => theme.colors.black};
`;

export const Modal = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;

  transform: translate(-50%);

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  padding-bottom: 40px;
  width: 280px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    width: 704px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  & h3 {
    margin-bottom: 16px;

    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.01em;

    @media screen and (min-width: 768px) {
      width: 321px;
      font-size: 28px;
    }
  }
  & table {
    transform: translate(-3px);
    & tr {
      &:not(:last-child) {
        & td {
          padding-bottom: 4px;
          padding-left: 0;
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
  & .imageThumb {
    position: relative;
    display: flex;
    justify-content: center;

    width: 240px;
    height: 240px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    border-radius: 0px 0px 40px 40px;

    background-color: #8b8b8b;
    overflow: hidden;

    @media screen and (min-width: 768px) {
      margin: 0px;
      width: 288px;
      height: 328px;
    }

    & .typeLable {
      position: absolute;
      left: 0;
      top: 20px;

      display: inline-block;
      min-width: 158px;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 6px;
      padding-bottom: 6px;

      font-family: "Manrope";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      text-align: center;

      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(50px);
      border-radius: 0px 40px 40px 0px;
    }

    & img {
      /* width: 100%; */
      height: 100%;
      display: block;
    }
  }

  & .modalButton {
    display: block;
    width: 240px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;

    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    @media screen and (min-width: 768px) {
      width: 160px;
    }
    &:hover {
      box-shadow: 0px 0px 10px black;
    }
  }

  & a {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    &:hover {
      box-shadow: 0px 0px 10px black;
    }
  }

  & .favoriteButton {
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.black};
  }

  & .closeButton {
    fill: ${({ theme }) => theme.colors.accent};
  }
`;

export const Key = styled.td`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Value = styled.td`
  width: 50%;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  & a {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.black};
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      box-shadow: none;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 23px;
  right: 23px;
  width: 28px;
  height: 28px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  &:hover {
    box-shadow: 0px 0px 10px black;
  }
`;

export const Coment = styled.p`
  margin-top: 28px;

  & span {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const SuppurtThumb = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: left;
    gap: 20px;
  }
`;

export const ButtonThumb = styled.div`
  margin-top: 40px;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: right;
    gap: 12px;
    margin-top: 32px;
    margin-bottom: 0;
  }
`;
