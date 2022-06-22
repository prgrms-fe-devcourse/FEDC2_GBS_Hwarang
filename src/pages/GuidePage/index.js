import styled from "@emotion/styled";
import { Image } from "components";
import React from "react";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 800px;
  margin: 50px 0 0 0;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 3;
      transform: none;
    }
  }
`;

const GuidePage = () => {
  return (
    <Wrapper>
      <Image
        src="https://mygbs.s3.ap-northeast-2.amazonaws.com/gbs-logo2.png"
        width="auto"
        height="800px"
        style={{ margin: "0 auto" }}
      />
    </Wrapper>
  );
};

export default GuidePage;
