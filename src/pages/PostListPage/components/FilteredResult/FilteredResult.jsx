import { useTasks } from "contexts/TaskProvider";

<<<<<<< HEAD
const FilteredResult = (data) => {
  const { tasks, channel, standard } = useTasks();

  const titleFilter = (temp) => {
    if (tasks.length !== 0) {
      const titleSet = tasks.map((item) => item.title);
      return temp.filter((item) => titleSet.includes(item.title));
    }
    return temp;
  };

  const channelFilter = (temp) => {
    if (channel.length !== 0) {
      return temp.filter((item) => item.channel === channel);
    }
    return temp;
  };

  const standardFilter = (temp) => {
    if (standard.length !== 0) {
      // 각 기준 별로 리코일 요청하면 될듯
      return temp;
    }
    return temp;
  };
  let result = data;
  result = standardFilter(result);
  result = titleFilter(result);
  result = channelFilter(result);
=======
const { tasks, channel, standard } = useTasks();

const titleFilter = (data) => {
  if (tasks.length !== 0) {
    const titleSet = tasks.map((item) => item.title);
    return data.filter((item) => titleSet.includes(item.title));
  }
  return data;
};

const channelFilter = (data) => {
  if (channel.length !== 0) {
    return data.filter((item) => item.channel === channel);
  }
  return data;
};

const standardFilter = (data) => {
  if (standard.length !== 0) {
    // 각 기준 별로 리코일 요청하면 될듯
    return data;
  }
};

const FilteredResult = (data) => {
  let result = data;
  result = titleFilter(result);
  result = channelFilter(result);
  result = standardFilter(result);
>>>>>>> b06a432 (feat:필터링 컴포넌트 분리 생성)

  return result;
};

export default FilteredResult;
