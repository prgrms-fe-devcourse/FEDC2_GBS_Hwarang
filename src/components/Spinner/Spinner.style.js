import styled from "@emotion/styled";

const SpinnerWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  animation: spin 1000ms infinite linear;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default { SpinnerWrapper };
