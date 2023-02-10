import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 7px 4px 14px ${({ theme }) => theme.colors.black};
    opacity: 0.7;
    border-radius: 0px 0px 20px 20px;
    max-width: 280px;
    min-height: 606px;
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
    align-items: stretch;

`
export const ImgWrapper = styled.div`
    position: relative;
    width: 280px;
    height: 288px;
    /* background-image: url(https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg);
    background-size: contain; */
    background-color: ${({ theme }) => theme.colors.gray};

            @media (min-width: 768px) {
          width: 336px;
    };

            @media (min-width: 1280px) {
          width: 288px;
    };
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
    color: ${({ theme }) => theme.colors.black};

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
    color: ${({ theme }) => theme.colors.accent};

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
color: ${({ theme }) => theme.colors.black};

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
  color: ${({ theme }) => theme.colors.black};
  
  /* color: #000; */


  &:not(:last-child) {
    padding-bottom: 8px;
  }


`;

export const OneButtonWrapper = styled.div`
margin-bottom: 32px;
  /* padding: 50px 16px 32px 16px; */
`;
export const ButtonWrapper = styled.div`
margin: auto auto 0 auto;
  /* padding: 20px 16px 12px 16px; */
`;
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
            
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: 40px;

    &:hover {
          border: 2px solid #ff6101;
          color: #ff6101;
    }

`;

export const ButtonLearn = styled(Button)`
    width: 248px;
    height: 38px;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
`;
export const ButtonDelete = styled(ButtonLearn)`
    margin-top : 12px;
`;