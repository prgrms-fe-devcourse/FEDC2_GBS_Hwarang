import styled from "@emotion/styled";
import Common from "styles/common";

// eslint-disable-next-line
export const NoPostWrapper = styled.div`
  border: 1px solid ${Common.colors.main};
  border-radius: 10px;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 12rem;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const NavigateBlock = styled.div`
  display: ${({ isOwner }) => (isOwner ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
