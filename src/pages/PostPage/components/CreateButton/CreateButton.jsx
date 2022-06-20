import React from "react";
import PropTypes from "prop-types";
import { Button } from "components";
import S from "../../PostPage.style";

const propTypes = {
  addPlan: PropTypes.func,
  registPost: PropTypes.func,
  temporarySave: PropTypes.func,
};

const defaultProps = {
  addPlan: () => {},
  registPost: () => {},
  temporarySave: () => {},
};

const CreateButton = ({ addPlan, registPost, temporarySave }) => {
  return (
    <>
      <S.AddPlanContainer>
        <Button
          width={250}
          height={60}
          border
          backgroundColor="$white"
          color="$gray03"
          textSize="$b1"
          onClick={addPlan}
        >
          일정추가 +
        </Button>
      </S.AddPlanContainer>
      <S.ActionsContainer>
        <Button width={230} height={80} onClick={registPost}>
          일정 등록
        </Button>
        <Button
          width={230}
          height={80}
          border
          backgroundColor="$white"
          color="$main"
          onClick={temporarySave}
        >
          임시저장
        </Button>
      </S.ActionsContainer>
    </>
  );
};

CreateButton.propTypes = propTypes;
CreateButton.defaultProps = defaultProps;

export default CreateButton;
