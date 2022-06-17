import { useTasks } from "contexts/TaskProvider";

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

  return result;
};

export default FilteredResult;
