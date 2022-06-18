import React, { useRef } from "react";
import PropTypes from "prop-types";
import Common from "styles/common";
import { Input, Icon, Button } from "components";
import * as S from "./ImageUploader.style";

const proptype = {
  onChange: PropTypes.func,
  useButton: PropTypes.bool,
  btnText: PropTypes.string,
  btnOptions: PropTypes.instanceOf(Object),
  iconOptions: PropTypes.instanceOf(Object),
  props: PropTypes.instanceOf(Object),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.number,
  border: PropTypes.bool,
  id: PropTypes.number,
};

const defaultProp = {
  onChange: null,
  useButton: false,
  btnText: "이미지 업로드",
  btnOptions: {},
  iconOptions: {},
  props: {},
  width: 150,
  height: 50,
  backgroundColor: Common.colors.main,
  color: Common.colors.white,
  borderRadius: 10,
  border: false,
  id: null,
};

function ImageUploader({
  onChange,
  useButton,
  btnText,
  btnOptions,
  iconOptions,
  width,
  height,
  backgroundColor,
  color,
  borderRadius,
  border,
  id,
  ...props
}) {
  const inputRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  return (
    <S.ImageUploaderWrapper {...props}>
      <Input
        id={id}
        ref={inputRef}
        type="file"
        accept="image/*"
        isFileUploadInput
        useIcon={false}
        onChange={(e) => onChange(e)}
      />
      {useButton ? (
        <Button
          {...btnOptions}
          onClick={handleClick}
          width={width}
          height={height}
          backgroundColor={backgroundColor}
          color={color}
          borderRadius={borderRadius}
          border
        >
          {btnText}
        </Button>
      ) : (
        <Icon {...iconOptions} onClick={handleClick} />
      )}
    </S.ImageUploaderWrapper>
  );
}

ImageUploader.propTypes = proptype;
ImageUploader.defaultProps = defaultProp;

export default ImageUploader;
