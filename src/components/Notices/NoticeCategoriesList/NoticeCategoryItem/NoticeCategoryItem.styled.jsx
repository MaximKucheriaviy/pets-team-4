import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    background: #FFFFFF;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 0px 0px 20px 20px;
    max-width: 280px;
    height: auto;
    padding-bottom: 12px;

            @media (min-width: 768px) {
          max-width: 336px;
    };

            @media (min-width: 1280px) {
          max-width: 288px;
    };

`;
export const Wrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

`
export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const NoticeCategory = styled.div`
    position: absolute;
    top: 20px;
    left: 0px;
    z-index: 4;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 158px;
    height: 28px;

    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.04em;

    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 0 16px 16px 0;
    backdrop-filter: blur(2px);
`;

export const Favorite  = styled.div`
position: absolute;
    top: 12px;
    right: 12px;
    z-index: 4;
    opacity: 0.6;

    width: 44px;
    height: 44px;

    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(2px);
    border-radius: 25px;
    color: #F59256;

    &:hover {
     opacity: 1;
     color: #ff6101;
    }
`;

export const Image = styled.img`
  width: 100%;
  height: 288px;
  object-fit: cover;

`;

export const Title = styled.p`
font-weight: 700;
font-size: 28px;
line-height: 38px;
letter-spacing: -0.01em;
padding-bottom: 20px;

  /* margin-left: 5px; */
`;

export const ContainerInfo = styled.div`
  display: flex;
`;

export const TitleInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RelevantInfoWrapper = styled.div`
  display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 37px;
`;

export const Info = styled.div`
  font-size: 16px;
  line-height: 22px;

  &:not(:last-child) {
    padding-bottom: 8px;
  }


`;

export const OneButtonWrapper = styled.div`
margin-bottom: 32px;
  /* padding: 50px 16px 32px 16px; */
`;
export const ButtonWrapper = styled.div`
margin: auto;
  /* padding: 20px 16px 12px 16px; */
`;
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
            
    border: 2px solid rgb(245, 146, 86);
    border-radius: 40px;

    &:hover {
          border: 2px solid #ff6101;
          color: #ff6101;
    }
`;

// export const ButtonCategory = styled(Button)`
//     margin: 8px 28px;
//     color:#111111;
//     font-size: 14px;
//     line-height: 19px;
//     letter-spacing: 0.04em;

//     &.active {
//     color: #FFFFFF;
//     background: #F59256;
//   }
// `;

export const ButtonLearn = styled(Button)`
    width: 248px;
    height: 38px;
    color:#F59256;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
`;
export const ButtonDelete = styled(ButtonLearn)`
    margin-top : 12px;
`;