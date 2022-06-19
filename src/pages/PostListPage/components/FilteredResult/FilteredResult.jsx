import { useTasks } from "contexts/TaskProvider";

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

  return result;
};

export default FilteredResult;
