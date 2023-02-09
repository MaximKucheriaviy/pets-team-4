import styled from "styled-components";

export const SponsorContainer = styled.div`
  font-family: "Manrope";
`;
export const SponsorList = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: -12px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SponsorCard = styled.li`
  min-height: 192px;
  height: auto;
  background: #ffffff;
  border-radius: 20px;
  margin-bottom: 12px;
  padding: 12px 12px 12px 4px ;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  :hover {
    box-shadow: 14px 8px 28px rgb(216, 216, 216);
  }
  @media screen and (min-width: 768px) {
    min-height: 246px;
   padding: 16px 16px 16px 4px ;
    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    min-height: 287px;
  }
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
`;
export const SponsorLogo = styled.img`
  width: 100px;
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
  :focus,
  :hover {
    color: #f59256;
    background: #ffffff;
    cursor: pointer;
  }
`;
export const SponsorText = styled.p`
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
  :focus,
  :hover {
    color: #f59256;
    background: #ffffff;
  }
  &:focus .schedule,
  &:hover .schedule {
    display: block;
  }
`;
export const PlugText = styled.p`
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
