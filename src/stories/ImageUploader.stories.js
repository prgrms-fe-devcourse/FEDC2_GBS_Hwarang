import React, { useState } from "react";
import ImageUploader from "components/ImageUploader";
import uploadImageToS3 from "utils/uploadImageToS3";

export default {
  title: "ImageUploader",
  component: ImageUploader,
};

export const imgUploadViaS3 = () => {
  const [image, setImage] = useState(null);
  const iconOptions = {
    name: "file_upload",
    fontSize: 40,
  };

  const onUploadClick = (ref, e) => {
    e.preventDefault();
    ref.current.click();
  };

  const onChange = async (e) => {
    const result = await uploadImageToS3(e.target.files[0]);
    setImage(result.location);
  };

  return (
    <>
      {image && <img src={image} alt="uploaded" />}
      <ImageUploader
        useButton={false}
        iconOptions={iconOptions}
        onUploadClick={onUploadClick}
        onChange={onChange}
      />
    </>
  );
};
