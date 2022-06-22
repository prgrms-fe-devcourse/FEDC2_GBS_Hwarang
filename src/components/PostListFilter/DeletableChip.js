import React from "react";
import styled from "@emotion/styled";
import { useTasks } from "contexts/TaskProvider";
import { Icon } from "components";
import PropTypes from "prop-types";
import Common from "styles/common";

const List = styled.li`
  list-style: none;
  float: left;
`;
const Container = styled.div`
  font-size: 12px;
  display: flex;
  width: 100px;
  margin-right: 10px;
  box-sizing: border-box;
  border: 1px solid ${Common.colors.gray05};
  border-radius: 18px;
  padding: 7px;
  background-color: white;
  :hover {
    cursor: pointer;
  }
`;
const Content = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 5px;
  flex-grow: 1;
`;
const RemoveBtn = styled.button`
  width: 12px;
  border: none;
  padding: 0;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${Common.colors.gray06};
  }
`;

const DeletableChip = ({ id, content }) => {
  const { removeTask } = useTasks();

  return (
    <List>
      <Container>
        <Content>{content}</Content>
        <RemoveBtn onClick={() => removeTask(id)}>
          <Icon style={{ color: "black", fontSize: "12px" }} name="close" />
        </RemoveBtn>
      </Container>
    </List>
  );
};

export default DeletableChip;

DeletableChip.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
