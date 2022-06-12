import styled from "@emotion/styled";

// eslint-disable-next-line
export const ImageButtonWrapper = styled.div`
  position: absolute;
  top: ${({ isCover }) => (isCover ? "8%" : "50%")};
  left: ${({ isCover }) => (isCover ? "92%" : "50%")};
  transform: ${({ isCover }) => (isCover ? "none" : "translate(-50%, -50%)")};
  &:hover {
    cursor: pointer;
  }
`;

export const CameraWrapper = styled.div`
  width: 60px;
`;
