import React from "react";
import styled from "@emotion/styled";
import { useTasks } from "contexts/TaskProvider";
import PropTypes from "prop-types";

const List = styled.li`
  list-style: none;
  float: left;
`;
const Container = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 10px;
  box-sizing: border-box;
  border: 1px solid #cecece;
  border-radius: 18px;
  padding: 7px;
  background-color: white;
`;
const Content = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 5px;
`;
const RemoveBtn = styled.button`
  font-size: 5px;
  border: none;
  border-radius: 50%;
`;

const DeletableChip = ({ id, content }) => {
  const { removeTask } = useTasks();

  return (
    <List>
      <Container>
        <Content>{content}</Content>
        <RemoveBtn onClick={() => removeTask(id)}>X</RemoveBtn>
      </Container>
    </List>
  );
};

export default DeletableChip;

DeletableChip.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
