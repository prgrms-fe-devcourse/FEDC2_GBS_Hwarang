import React, { useEffect, useState } from "react";
import Input from "components/Input";
import InputResult from "components/InputResult";
import Text from "components/Text";
import PropTypes from "prop-types";
import { getUsers } from "api/user-api";
import Button from "components/Button";

const propTypes = {
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const defaultProps = {
  margin: 0,
  padding: 0,
};

const SideBar = ({ margin, padding }) => {
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (exception) {
        console.error(exception);
      }
    }

    fetchData();
  }, []);

  return (
    <div style={containerStyle}>
      <Input name="user" onChange={handleChange} width="100%" />
      <div style={{ margin: "20px 15px" }}>
        <Text strong size="$b3" style={{ display: "inline-block" }}>
          사용자 검색 결과
        </Text>
        <Button width={70} height={30} textSize="$n1">
          새로고침
        </Button>
      </div>
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
