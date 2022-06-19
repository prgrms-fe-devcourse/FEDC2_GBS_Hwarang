import React, { useCallback, useEffect, useRef, useState } from "react";
import { Input, Text, Icon } from "components";
import InputResult from "components/InputResult";
import PropTypes from "prop-types";
import getAllUsers from "repository/userRepository";
import { useRecoilValue } from "recoil";
import { userInfo } from "recoil/user";
import * as S from "./Sidebar.style";

const propTypes = {
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const defaultProps = {
  margin: 0,
  padding: 0,
};

const SideBar = ({ margin, padding }) => {
  const myData = useRecoilValue(userInfo);
  const [userKeyword, setUserKeyword] = useState("");
  const [users, setUsers] = useState([]);
  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "user") {
      setUserKeyword(value);
    }
  };

  const containerStyle = {
    margin,
    padding,
  };

  // 새로고침 timer
  const timer = useRef(null);
  const [time, setTime] = useState(10);
  const isRefresh = useRef(false);

  const fetchData = useCallback(async () => {
    try {
      if (myData) {
        const response = await getAllUsers(myData.following);
        setUsers(response);
      }
    } catch (exception) {
      console.error(exception);
    }
  }, [myData]);

  const handleRefresh = async () => {
    const refresh = isRefresh.current;
    if (!refresh) {
      // 새로고침 timer가 끝난 경우, 사용자 정보 재요청
      await fetchData();
      // 1. timer 시작
      timer.current = setInterval(() => {
        setTime((pre) => pre - 1);
      }, 1000);
      isRefresh.current = true;
    }
  };

  useEffect(() => {
    if (time === 0) {
      clearInterval(timer.current);
      setTime(10);
      isRefresh.current = false;
    }
  }, [time]);

  useEffect(() => {
    fetchData();

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [fetchData, timer]);

  return (
    <div style={containerStyle}>
      <Input name="user" onChange={handleChange} width="100%" />
      <S.HeaderWrapper>
        <Text strong size="$b3" style={{ display: "inline-block" }}>
          사용자 검색 결과
        </Text>
        {/* <Button width={70} height={30} textSize="$n1">
          새로고침
        </Button> */}
        <S.TimerWrapper>
          {!isRefresh.current ? (
            <Icon name="refresh" onClick={handleRefresh} />
          ) : (
            <Icon name="block" />
          )}
          {isRefresh.current && <Text size="$c1">{time}</Text>}
          {isRefresh.current && (
            <S.WarnWrapper className="text--warn">
              <Text size="$n1" strong>
                조금 기다려유 🙌🏻
              </Text>
            </S.WarnWrapper>
          )}
        </S.TimerWrapper>
      </S.HeaderWrapper>
      <InputResult
        inputType="user"
        type="all"
        keyword={userKeyword}
        data={users}
        options={["fullName", "email"]}
        width="100%"
        height="80vh"
      />
    </div>
  );
};

SideBar.propTypes = propTypes;
SideBar.defaultProps = defaultProps;

export default SideBar;
