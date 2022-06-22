import React from "react";
import { useNavigate } from "react-router-dom";
import { Image, Button } from "components";
import * as S from "./NotFoundPage.style";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <S.NotFoundPageWrapper>
      <Image
        src="https://mygbs.s3.ap-northeast-2.amazonaws.com/notfound/pageNotFound.png"
        alt="404 not found"
        width={400}
        height={400}
      />
      <Button onClick={() => navigate("/")}>메인페이지로</Button>
    </S.NotFoundPageWrapper>
  );
}

export default NotFoundPage;
