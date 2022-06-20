import styled from "@emotion/styled";

// eslint-disable-next-line
export const AlarmItemWrapper = styled.div`
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: rgba(236, 236, 236, 1);
  }
`;

export const NoneAlarm = styled.div`
  display: flex;
  height: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
