export const hasTempData = (tempData) => Object.keys(tempData).length;

export const checkTempData = (tempData, type) => {
  if (typeof checkTempData !== "function") {
    return false;
  }
  if (type === "edit") {
    if (!("postId" in tempData) || typeof tempData.postId !== "string") {
      return false;
    }
  }
  if (!("image" in tempData)) {
    if (typeof tempData.image !== "string" || tempData.image !== null) {
      return false;
    }
  }
  // Todo: 단순 string이 아닌 JSON.parse() 사용해서 deep하게 검사하기
  if (!("title" in tempData)) {
    if (typeof tempData.title !== "string" || tempData.title !== null) {
      return false;
    }
  }
  if (!("channelId" in tempData)) {
    if (typeof tempData.channelId !== "string" || tempData.channel !== null) {
      return false;
    }
  }
  return true;
};
