import React from "react";
// import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";
import Image from "components/Image";
// import Icon from "components/Icon";
// import Button from "components/Button";
// import Text from "components/Text";
import Common from "styles/common";
import * as S from "./Footer.style";

const propTypes = {};

const defaultProps = {};

const Footer = () => {
  return (
    <S.Container>
      <S.TopContainer>
        <S.ImageWrapper>
          <Image
            src="https://mygbs.s3.ap-northeast-2.amazonaws.com/ment.png"
            width="100%"
            height="auto"
            mode="contain"
          />
        </S.ImageWrapper>
        <S.SubscribeContainer>
          <div style={{ marginBottom: 10 }}>
            <input
              placeholder="Your email address"
              style={{
                width: 300,
                border: "none",
                borderBottom: "1px solid black",
                marginRight: 8,
                backgroundColor: `${Common.colors.bg_gray}`,
              }}
            />
            <button type="submit">트렌드 레터 구독</button>
          </div>
          <S.AlignCenter>
            <span className="material-symbols-outlined">done</span>
            <span>개인정보 수집 빛 이용과 광고성 정보 수신 동의</span>
          </S.AlignCenter>
        </S.SubscribeContainer>
      </S.TopContainer>
      <S.ContentContainer>
        <S.Item>
          <span
            style={{
              fontSize: "20px",
              color: `${Common.colors.main}`,
              marginBottom: "10px",
            }}
          >
            Notice
          </span>
          <span>[당첨자 발표]가봤슈 2주년 감사 2벤트</span>
        </S.Item>
        <S.Item>
          <span
            style={{
              fontSize: "20px",
              color: `${Common.colors.main}`,
              marginBottom: "10px",
            }}
          >
            Contact Us
          </span>
          <span>
            개발 화라리와 만날 생각을 하고 있으시다면우리는 바쁜 몸이라는걸
            기억해 주세요!
          </span>
        </S.Item>
        <S.Item>
          <span
            style={{
              fontSize: "20px",
              color: `${Common.colors.main}`,
              marginBottom: "10px",
            }}
          >
            About 개발 화라리
          </span>
          <span>
            개발 화라리는 프로그래머스 데브코스 2기 프론트엔드 과정을 통해
            만들어진 멋진 팀이랍니다.
          </span>
        </S.Item>
        <S.Item>
          <span
            style={{
              fontSize: "20px",
              color: `${Common.colors.main}`,
              marginBottom: "10px",
            }}
          >
            FAQ
          </span>
          <span>궁금한 사항을 모아 한번에 보여드립니다.</span>
        </S.Item>
      </S.ContentContainer>
      <S.BottomContainer>
        <div className="informaion__container">
          <span>
            사업자 정보 | 개인정보처리방침 | 이용약관 | 저작권 정책 |
            청소년보호정책
          </span>
          <span style={{ fontSize: "12px" }}>
            © UNIVTOMORROW. ALL RIGHTS RESERVED.
          </span>
        </div>
        <S.IconContainer>
          <span className="material-symbols-outlined">bolt</span>
          <span className="material-symbols-outlined">bolt</span>
          <span className="material-symbols-outlined">bolt</span>
          <span className="material-symbols-outlined">bolt</span>
          <span className="material-symbols-outlined">bolt</span>
        </S.IconContainer>
      </S.BottomContainer>
      <S.CopyrightWrapper>
        <span>Copyright © 2022 GBS All rights reserved.</span>
      </S.CopyrightWrapper>
    </S.Container>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
