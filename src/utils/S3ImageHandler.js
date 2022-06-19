import ReactS3Client from "react-aws-s3-typescript";
// eslint-disable-next-line
window.Buffer = window.Buffer || require("buffer").Buffer;

export const uploadImageToS3 = async (file, directory = "") => {
  const config = {
    bucketName: "mygbs",
    dirName: directory,
    region: "ap-northeast-2",
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  };

  const s3 = new ReactS3Client(config);

  try {
    const res = await s3.uploadFile(file, file.name);
    return res;
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }
};

export const deleteImageToS3 = async (file, directory = "") => {
  const config = {
    bucketName: "mygbs",
    dirName: directory,
    region: "ap-northeast-2",
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  };

  const s3 = new ReactS3Client(config);

  try {
    await s3.deleteFile(file, config);
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }
};

export const listFiles = async () => {
  const config = {
    bucketName: "mygbs",
    dirName: "",
    region: "ap-northeast-2",
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  };

  const s3 = new ReactS3Client(config);
  try {
    const fileList = await s3.listFiles();
    // eslint-disable-next-line no-console
    console.log(fileList);
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }
};
