import styled from "styled-components";

export const Card = styled.li`
  @media (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }

  &::before {
    content: "";
    display: block;
    margin-bottom: 4px;
    width: 200px;
    height: 4px;
    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
    border-radius: 40px;

    @media (min-width: 767px) and (max-width: 1279px) {
      width: 280px;
      height: 8px;
    }

    @media (min-width: 1280px) {
      width: 340px;
      height: 8px;
    }
  }
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  height: 66px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.37;
  letter-spacing: -0.01em;
  color: #111111;
  overflow: hidden;
`;

export const Text = styled.p`
  margin-bottom: 40px;
  height: 154px;
  line-height: 1.37;
  color: #111321;
  overflow: hidden;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Date = styled.span`
  line-height: 1.37;
  color: rgba(17, 17, 17, 0.6);
`;

export const Link = styled.a`
  font-weight: 500;
  line-height: 1.37;
  text-decoration-line: underline;
  color: #f59256;
`;