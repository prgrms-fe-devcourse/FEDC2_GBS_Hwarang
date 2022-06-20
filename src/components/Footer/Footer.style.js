import styled from "@emotion/styled";
import Common from "styles/common";

export const Container = styled.div`
  background-color: ${Common.colors.bg_gray};
  font-size: 12px;
  line-height: 1.2;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 180px 70px 80px;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 550px;
`;

export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  align-items: end;
  margin-bottom: 10px;
  input::placeholder {
    color: ${Common.colors.footerText};
  }
`;

export const ReceptionCheck = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 180px 70px 180px;
`;

export const Item = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 180px;
`;

export const InformationContainer = styled.div`
  display: flex;
  gap: 3px;
  align-items: flex-end;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  background-color: ${Common.colors.main};
  color: ${Common.colors.white};
`;
