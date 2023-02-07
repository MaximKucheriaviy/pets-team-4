import styled from "styled-components";

export const SponsorContainer = styled.div`
  font-family: "Manrope";
  /* display: flex;
  margin: 0 auto; */

  /* @media (min-width: 1280px) {
    width: 1281px;
  }

  @media (min-width: 769px) and (max-width: 1279px) {
    width: 769px;
    padding: 0;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  } */
`;
export const SponsorList = styled.ul`
  margin-bottom: -12px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-right: -32px;
  }
  /* @media (min-width: 1280px) {
    width: 1246px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 704px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  } */
`;

export const SponsorCard = styled.li`
  height: 192px;
  background: #ffffff;
  border-radius: 20px;
  margin-bottom: 12px;
  padding: 12px 0 12px 4px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  :hover {
    box-shadow: 14px 8px 28px rgb(216, 216, 216);
  }
  @media screen and (min-width: 768px) {
    height: 246px;
    margin-bottom: 32px;
    flex-basis: calc(100% / 2 - 32px);
    margin-right: 32px;
    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    height: 287px;
    flex-basis: calc(100% / 3 - 32px);
  }
  /* @media (min-width: 1280px) {
    margin-bottom: 32px;
    width: 397px;
    height: 287px;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 40px;
    :hover {
      box-shadow: 14px 8px 28px rgb(216, 216, 216);
    }
  }
  @media (max-width: 1279px) {
    margin-bottom: 32px;
    width: 336px;
    height: 246px;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 40px;
    :hover {
      box-shadow: 14px 8px 28px rgb(216, 216, 216);
    } */
  /* }

  @media (max-width: 768px) {
    width: 280px;
    height: 192px;
    background-color: #ffffff;
    border-radius: 20px;
    border: none;
    margin-bottom: 12px;

    :hover {
      box-shadow: 0px 0px 15px rgb(216, 216, 216);
    }
  } */
`;
export const SponsorHeader = styled.h3`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #f59256;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.37;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.35;
  }

  /* @media (min-width: 1280px) {
    padding: 16px;
    font-size: 20px;
    line-height: 1.35;
    align-items: center;
    text-align: center;
    text-decoration-line: underline;
  }

  @media (max-width: 1279px) {
    padding: 16px;
    font-size: 16px;
    line-height: 1.37;
    align-items: center;
    text-align: center;
    text-decoration-line: underline;
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 12px;
    text-decoration: underline solid #f59256;
    text-align: center;
  } */
`;

export const SponsorLogoBox = styled.div`
  /* @media (min-width: 1280px) {
    width: 45%;
    padding: 4px;
  }
  @media (max-width: 1279px) {
    width: 40%;
    padding: 4px;
  }
  @media (max-width: 768px) {
    width: 45%;
    padding: 5px;
  } */
`;

export const SponsorLogo = styled.img`
  width: 110px;
  height: 78px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 85px;
  }
  @media screen and (min-width: 1280px) {
    width: 158px;
    height: 112px;
  }
`;

export const SponsorInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SponsorContacts = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  width: 100%;
  justify-content: end;
  text-align: left;
  max-height: 140px;
  ::-webkit-scrollbar {
    width: 3px;
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #f59256;
  }

  @media screen and (min-width: 768px) {
    max-height: 165px;
  }
  @media screen and (min-width: 1280px) {
    max-height: 200px;
  }
  /* @media (min-width: 1280px) {
    width: 55%;
    justify-content: end;
    text-align: left;
    max-height: 188px;
  } */
  /* @media (max-width: 1279px) {
    width: 60%;
    justify-content: end;
    text-align: left;
    max-height: 175px;
  } */
  /* @media (max-width: 768px) {
    width: 55%;
    justify-content: end;
    text-align: left;
    max-height: 144px;
  }  */
`;
export const SponsorsContactsLink = styled.a`
  display: block;
  text-decoration: none;
  color: #000000;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.35;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.37;
    margin-bottom: 12px;
  }
  :last-child {
    margin-bottom: 0px;
  }
  :hover {
    color: #f59256;
    background: #ffffff;
  }
`;
export const SponsorText = styled.p`
  /* font-family: "Manrope";
  font-weight: 500;

  @media (min-width: 1280px) {
    font-size: 16px;
    margin-bottom: 12px;
  }

  @media (max-width: 1279px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 4px;
  }

  :last-child {
    margin-bottom: 0px;
  }
  :hover {
    color: #f59256;
    background: #ffffff;
  } */
  color: #000000;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.35;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.37;
    margin-bottom: 12px;
  }
  :last-child {
    margin-bottom: 0px;
  }
  :hover {
    color: #f59256;
    background: #ffffff;
  }
  &:hover .schedule {
    display: block;
  }
`;

export const ScheduleStyle = styled.div`
  position: absolute;
  height: auto;
  font-size: 12px;
  width: 120px;
  padding: 12px;
  color: #000000;
  background: #ffffff;
  border: 1px solid #f59256;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 5;
`;

