import React, { useState } from "react";
import Input from "components/Input";
import InputResult from "components/InputResult";
import PropTypes from "prop-types";

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
  // const [users, setUsers] = useState([]);
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

  return (
    <div style={containerStyle}>
      <Input name="user" onChange={handleChange} />
      <InputResult
        inputType="user"
        keyword={userKeyword}
        data={users}
        options={["fullName", "email"]}
      />
    </div>
  );
};

SideBar.propTypes = propTypes;
SideBar.defaultProps = defaultProps;

export default SideBar;
