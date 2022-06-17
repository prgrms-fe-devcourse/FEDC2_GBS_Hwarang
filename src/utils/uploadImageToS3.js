import { uploadFile } from "react-s3";
// eslint-disable-next-line
window.Buffer = window.Buffer || require("buffer").Buffer;

const uploadImageToS3 = async (file, directory = "") => {
  const config = {
    bucketName: "mygbs",
    dirName: directory,
    region: "ap-northeast-2",
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  };

  const res = await uploadFile(file, config);
  return res;
};

export default uploadImageToS3;
