import styled from "@emotion/styled";
import { Image } from "components";
import React from "react";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 50px 0 0 0;
`;

const GuidePage = () => {
  return (
    <Wrapper>
      <Image
        src="https://user-images.githubusercontent.com/72294509/174862615-e95173dd-a6dd-4502-a4ca-1ce77a0b5059.png"
        width="50%"
        height="auto"
        style={{ margin: "0 auto" }}
      />
    </Wrapper>
  );
};

export default GuidePage;
