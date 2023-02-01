import styled from "styled-components";

export const Message = styled.p`
  margin-top: ${({ margin }) => margin};
  font-weight: 600;
  line-height: 1.35;
  color: red;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 20px;
  }

  @media (min-width: 1280px) {
    font-size: 22px;
  }
`;
