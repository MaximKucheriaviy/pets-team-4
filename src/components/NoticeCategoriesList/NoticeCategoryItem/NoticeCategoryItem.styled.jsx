import styled from "styled-components";
// import Img1 from '../../../../public/Frame.png';

export const Item = styled.li`
    background: #FFFFFF;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 0px 0px 20px 20px;
    /* background-image: url(http://dummyimage.com/300x300/99cccc.gif&text=Not+image!); */
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

`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
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
    opacity: 0.6;
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
    border-radius: 25px;
`;

export const Image = styled.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;

  &:hover {
    /* transform: scale(1.03); */
    cursor: pointer;
  }
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
  padding: 50px 16px 32px 16px;
`;
export const TwoButtonWrapper = styled.div`
  padding: 20px 16px 12px 16px;
`;
export const Button = styled.button`
            width: 248px;
            height: 38px;
            border-color: #F59256;
            border-radius: 40px;
            color:#F59256;
            font-size: 16px;
            line-height: 22px;
    letter-spacing: 0.04em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonDelete = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top : 12px;
            width: 248px;
            height: 38px;
            border-color: #FF6101;
            border-radius: 40px;
            color:#FF6101;
            font-size: 16px;
            line-height: 22px;
    letter-spacing: 0.04em;

`;