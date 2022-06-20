const useSorting = (data, option) => {
  const copyData = [...data];

  switch (option) {
    case "popular":
      return [
        ...copyData.sort((a, b) => {
          return b.likesNum - a.likesNum;
        }),
      ];
    case "latest":
      return [
        ...copyData.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB.getTime() - dateA.getTime();
        }),
      ];
    case "oldest":
      return [
        ...copyData.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateA.getTime() - dateB.getTime();
        }),
      ];
    case "comments":
      return [
        ...copyData.sort((a, b) => {
          return b.commentsNum - a.commentsNum;
        }),
      ];
    default:
      return copyData;
  }
};

export default useSorting;
