import styled from "styled-components";

export const ModalConitainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 20px 40px 20px;
  /* width: 280px; */
  background: ${props => props.theme.colors.white};
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 40px 80px 40px 80px;
  }
`;

export const Title = styled.p`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.35;
  text-align: center;
  color: ${props => props.theme.colors.accent};
  margin-bottom: -30px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const WrapperFormLog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  background: ${props => props.theme.colors.white};
  border-radius: 40px;
  padding: 20px 20px 0px 20px;
`;