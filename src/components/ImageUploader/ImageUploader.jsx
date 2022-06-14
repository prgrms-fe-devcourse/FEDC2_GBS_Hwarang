import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Input, Icon, Button } from "components";
import * as S from "./ImageUploader.style";

const proptype = {
  onChange: PropTypes.func,
  onUploadClick: PropTypes.func,
  useButton: PropTypes.bool,
  btnText: PropTypes.string,
  btnOptions: PropTypes.instanceOf(Object),
  iconOptions: PropTypes.instanceOf(Object),
  props: PropTypes.instanceOf(Object),
};

const defaultProp = {
  onChange: null,
  onUploadClick: null,
  useButton: false,
  btnText: "이미지 업로드",
  btnOptions: {},
  iconOptions: {},
  props: {},
};

function ImageUploader({
  onChange,
  onUploadClick,
  useButton,
  btnText,
  btnOptions,
  iconOptions,
  ...props
}) {
  const ref = useRef(null);

  return (
    <S.ImageUploaderWrapper {...props}>
      <Input
        ref={ref}
        type="file"
        accept="image/*"
        isFileUploadInput
        useIcon={false}
        onChange={(e) => onChange(e)}
      />
      {useButton ? (
        <Button {...btnOptions} onClick={(e) => onUploadClick(ref, e)}>
          {btnText}
        </Button>
      ) : (
        <Icon {...iconOptions} onClick={(e) => onUploadClick(ref, e)} />
      )}
    </S.ImageUploaderWrapper>
  );
}

ImageUploader.propTypes = proptype;
ImageUploader.defaultProps = defaultProp;

export default ImageUploader;
