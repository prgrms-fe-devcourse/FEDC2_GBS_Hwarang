import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  position: relative;
`;

export const UserInfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 10%;
  transform: translateY(50%);
  display: flex;
  gap: 1rem;
  .image-wrapper {
    position: relative;
  }
  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;

export const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const ExtraInfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 10%;
  display: flex;
  gap: 1rem;
  margin-bottom: 10px;
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
