import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import Common from "styles/common";
import { Icon } from "components";
import S from "./Select.style";

const propTypes = {
  children: PropTypes.node.isRequired,
  channelId: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backgroundColor: PropTypes.string,
  data: PropTypes.instanceOf(Array),
  onChangeHandler: PropTypes.func,
};

const defaultProps = {
  channelId: "",
  padding: "8px 6px",
  fontSize: `${Common.fontSize.b2}`,
  fontWeight: "bold",
  color: `${Common.colors.gray04}`,
  backgroundColor: `${Common.colors.black01}`,
  data: [],
  onChangeHandler: () => {},
};

const Select = ({
  children,
  channelId,
  padding,
  fontSize,
  fontWeight,
  color,
  backgroundColor,
  data,
  onChangeHandler,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const [currentActive, setCurrentActive] = useState(channelId);

  const handleClick = () => {
    setShow(!show);
  };

  const selectedStyle = {
    children,
    padding,
    fontSize,
    fontWeight,
    color,
    backgroundColor,
  };

  const options = React.Children.toArray(children)
    .filter((element) => {
      if (React.isValidElement(element)) {
        return true;
      }
      return false;
    })
    .map((item) => {
      return React.cloneElement(item, {
        ...item.props,
        key: item.value,
        active: item.props.id === currentActive,
        onClick: () => {
          setCurrentActive(item.props.id);
          setShow(!show);
          onChangeHandler(null, "channel", item.props.value);
          onChangeHandler(null, "channelId", item.props.id);
        },
      });
    });

  const activeOption = useMemo(
    () => options.find((element) => currentActive === element.props.id),
    [currentActive, options]
  );

  return (
    <S.Select {...props} value={currentActive}>
      <S.Selected style={selectedStyle} onClick={handleClick}>
        <div className="selected-value">
          {activeOption
            ? activeOption.props.value
            : "여행 대륙을 선택해주세요!"}
        </div>
        <Icon name="keyboard_arrow_down" width={30} fontSize={40} />
      </S.Selected>
      <S.List style={{ display: `${show ? "block" : "none"}` }}>
        {options}
      </S.List>
    </S.Select>
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
