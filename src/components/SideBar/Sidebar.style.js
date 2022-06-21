import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 15px;
`;
export const TimerWrapper = styled.div`
  display: flex;
  float: right;
  cursor: pointer;

  &:hover .text--warn {
    display: block;
  }
`;

export const WarnWrapper = styled.div`
  display: none;
  position: absolute;
  width: 92px;
  right: 3%;
  background: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
  bottom: 86%;
`;
