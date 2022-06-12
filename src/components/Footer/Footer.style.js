import styled from "@emotion/styled";
import Common from "styles/common";

export const Container = styled.div`
  background-color: ${Common.colors.bg_gray};
  font-size: 12px;
  color: #666666;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 80px;
  padding-left: 80px;
  padding-right: 180px;
  @media screen and (max-width: 1250px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 600px;
`;

export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  .material-symbols-outlined {
    padding: 3px;
    background-color: #cecece;
    border-radius: 50%;
    font-weight: bold;
    color: ${Common.colors.white};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 180px;
  padding-right: 180px;
  padding-bottom: 80px;
`;

export const Item = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 180px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 5px;
  & span {
    padding: 3px;
    background-color: ${Common.colors.gray02};
    border-radius: 50%;
    color: ${Common.colors.white};
  }
`;

export const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  background-color: ${Common.colors.main};
  color: ${Common.colors.white};
`;

export const AlignCenter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;
