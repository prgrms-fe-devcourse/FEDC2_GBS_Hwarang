import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { jwtToken } from "recoil/authentication";
import { getMessagesByUserId } from "api/message-api";

const proptype = {
  messageId: PropTypes.string,
};

const defaultProp = {
  messageId: "",
};

function MessageItem({ messageId }) {
  const token = useRecoilValue(jwtToken);
  const [message, setMessage] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const msgData = async (id) => {
      const res = await getMessagesByUserId(id, token);
      return res;
    };
    if (messageId) {
      setMessage(msgData(messageId).data);
    }
  }, [messageId]);

  const handleClick = () => {
    navigate(`/message/${message?.receiver?._id}`);
  };

  return (
    // eslint-disable-next-line
    <div onClick={handleClick}>
      {message?.sender?.fullName}님이 메세지를 보냈습니다
    </div>
  );
}

MessageItem.propTypes = proptype;
MessageItem.defaultProps = defaultProp;

export default MessageItem;
