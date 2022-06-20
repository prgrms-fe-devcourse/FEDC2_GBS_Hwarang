import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Image, Icon, Button, Text, Input } from "components";
import Common from "styles/common";
import * as S from "./Footer.style";

const Footer = () => {
  const [checkIcon, setCheckIcon] = useState(false);

  return (
    <S.Container>
      <S.TopContainer>
        <S.ImageWrapper>
          <NavLink to="/">
            <Image
              src="https://mygbs.s3.ap-northeast-2.amazonaws.com/ment.png"
              width="100%"
              height="auto"
              mode="contain"
            />
          </NavLink>
        </S.ImageWrapper>
        <S.SubscribeContainer>
          <S.Form>
            <Input
              placeholder="Your email address"
              height={20}
              useIcon={false}
              fontColor="white"
              style={{
                marginRight: 8,
                padding: 0,
                border: "none",
                borderBottom: "1px solid black",
                borderRadius: 0,
                backgroundColor: `${Common.colors.bg_gray}`,
              }}
            />
            <Button
              style={{ display: "inline", padding: "2px 6px", marginLeft: 5 }}
              textSize={11}
              width={100}
              height={25}
              color={`${Common.colors.footerText}`}
              borderRadius={0}
              backgroundColor="transparent"
              border
            >
              트렌드 레터 구독
            </Button>
          </S.Form>
          <S.ReceptionCheck>
            <Icon
              name="done"
              style={{
                backgroundColor: `${
                  checkIcon ? Common.colors.main : "#cecece"
                }`,
                borderRadius: "50%",
                fontWeight: "bold",
                color: `${Common.colors.white}`,
                cursor: "pointer",
                userSelect: "none",
              }}
              onClick={() => setCheckIcon(!checkIcon)}
            />
            <Text size={14}>개인정보 수집 빛 이용과 광고성 정보 수신 동의</Text>
          </S.ReceptionCheck>
        </S.SubscribeContainer>
      </S.TopContainer>
      <S.ContentContainer>
        <S.Item>
          <Text size={20} color={`${Common.colors.main}`}>
            Notice
          </Text>
          <Text size={12} color={`${Common.colors.footerText}`}>
            [당첨자 발표] 가봤슈 2주년 감사 2벤트
          </Text>
        </S.Item>
        <S.Item>
          <Text size={20} color={`${Common.colors.main}`}>
            Contact Us
          </Text>
          <Text size={12} color={`${Common.colors.footerText}`}>
            개발 화라리와 만날 생각을 하고 있으시다면 우리는 바쁜 몸이라는걸
            기억해 주세요!
          </Text>
        </S.Item>
        <S.Item>
          <Text size={20} color={`${Common.colors.main}`}>
            About 개발 화라리
          </Text>
          <Text size={12} color={`${Common.colors.footerText}`}>
            개발 화라리는 프로그래머스 데브코스 2기 프론트엔드 과정을 통해
            만들어진 멋진 팀이랍니다.
          </Text>
        </S.Item>
        <S.Item>
          <Text size={20} color={`${Common.colors.main}`}>
            FAQ
          </Text>
          <Text size={12} color={`${Common.colors.footerText}`}>
            궁금한 사항을 모아 한번에 보여드립니다.
          </Text>
        </S.Item>
      </S.ContentContainer>
      <S.BottomContainer>
        <S.InformationContainer>
          <Text size={12} color={`${Common.colors.footerText}`}>
            사업자 정보 | 개인정보처리방침 | 이용약관 | 저작권 정책 |
            청소년보호정책
          </Text>
          <Text size={10} color={`${Common.colors.footerText}`}>
            © 개발화라리. ALL RIGHTS RESERVED.
          </Text>
        </S.InformationContainer>
        <S.IconContainer>
          <Icon
            name="bolt"
            style={{
              backgroundColor: `${Common.colors.gray02}`,
              borderRadius: "50%",
              fontWeight: "bold",
              color: `${Common.colors.white}`,
            }}
          />
          <Icon
            name="bolt"
            style={{
              backgroundColor: `${Common.colors.gray02}`,
              borderRadius: "50%",
              fontWeight: "bold",
              color: `${Common.colors.white}`,
            }}
          />
          <Icon
            name="bolt"
            style={{
              backgroundColor: `${Common.colors.gray02}`,
              borderRadius: "50%",
              fontWeight: "bold",
              color: `${Common.colors.white}`,
            }}
          />
          <Icon
            name="bolt"
            style={{
              backgroundColor: `${Common.colors.gray02}`,
              borderRadius: "50%",
              fontWeight: "bold",
              color: `${Common.colors.white}`,
            }}
          />
          <Icon
            name="bolt"
            style={{
              backgroundColor: `${Common.colors.gray02}`,
              borderRadius: "50%",
              fontWeight: "bold",
              color: `${Common.colors.white}`,
            }}
          />
        </S.IconContainer>
      </S.BottomContainer>
      <S.CopyrightWrapper>
        <Text size={12} color={`${Common.colors.white}`}>
          Copyright © 2022 GBS(개발화라리) All rights reserved.
        </Text>
      </S.CopyrightWrapper>
    </S.Container>
  );
};

export default Footer;
