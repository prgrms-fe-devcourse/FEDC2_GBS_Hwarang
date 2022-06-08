import React from "react";
import * as Ns from "./Navigation.style";

function Navigation() {
  return (
    <Ns.Navigation>
      <div />
      <Ns.LinkBlock>
        <Ns.NavigationLink to="/travel-destination">여행지</Ns.NavigationLink>
        <Ns.NavigationLink to="/plan">일정 만들기</Ns.NavigationLink>
        <Ns.NavigationLink to="/hotel">호텔</Ns.NavigationLink>
        <Ns.NavigationLink to="/guide">이용방법</Ns.NavigationLink>
      </Ns.LinkBlock>
      <Ns.ButtonBlock>
        <button type="button">로그인</button>
        <button type="button">회원가입</button>
      </Ns.ButtonBlock>
    </Ns.Navigation>
  );
}

export default Navigation;
