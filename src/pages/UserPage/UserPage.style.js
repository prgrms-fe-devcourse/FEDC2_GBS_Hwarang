import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 12rem;
`;

export const UserInfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 10%;
  transform: translateY(50%);
  display: flex;
  gap: 1rem;
  z-index: 10;

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
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(60, 60, 60, 0.32) 80%,
    rgba(30, 30, 30, 0.68) 90%,
    rgba(0, 0, 0, 0.8) 100%
  );
  opacity: 0.7;
  z-index: 1;
`;

export const ExtraInfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 10%;
  display: flex;
  gap: 1rem;
  margin-bottom: 10px;
  z-index: 10;
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FollowBlock = styled.div`
  margin-top: 10px;
  position: absolute;
  right: 11%;
`;

export const Main = styled.div``;

export const UserNameWrapper = styled.div`
  display: flex;
  align-items: center;

  .material-symbols-outlined {
    display: none;
    cursor: pointer;
  }

  &:hover .material-symbols-outlined {
    display: block;
  }
`;
