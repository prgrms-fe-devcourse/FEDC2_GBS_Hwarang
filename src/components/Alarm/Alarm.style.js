import styled from "@emotion/styled";

// eslint-disable-next-line import/prefer-default-export
export const AlarmWrapper = styled.div`
  position: absolute;
  width: 300px;
  max-height: 300px;
  overflow: auto;
  padding: 15px;
  top: 100%;
  right: 0;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const ProfileWrapper = styled.div`
  cursor: pointer;
  /* &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  } */
`;

export const NoneAlarm = styled.div`
  display: flex;
  height: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
