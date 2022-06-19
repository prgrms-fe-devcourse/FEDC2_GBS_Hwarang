import React from "react";
import ImageUploader from "components/ImageUploader";

export default {
  title: "ImageUploader",
  component: ImageUploader,
};

const Template = (args) => <ImageUploader {...args} />;

const onChange = (e) => {
  const formData = new FormData();

  formData.append("file", e.target.files[0]);
  formData.append("title", "test");
  formData.append("channelId", 1);

  // post data here( 비동기 처리 )
  console.log(formData.get("file"));
  // and recoil post data update here
};

const onUploadClick = (ref, e) => {
  e.preventDefault();
  ref.current.click();
};

export const ImageUploaderStory = Template.bind({});

ImageUploaderStory.args = {
  onChange,
  onUploadClick,
  useButton: false,
  iconOptions: {
    name: "file_upload",
    fontSize: 40,
  },
};
