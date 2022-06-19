/**
 * date 관련 공통 코드
 */
// eslint-disable-next-line no-extend-native
String.prototype.formatDate = function formatDate() {
  const date = new Date(this);
  let month = `${date.getMonth() + 1}`;
  let day = `${date.getDate()}`;
  const year = `${date.getFullYear()}`;

  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }

  return [year, month, day].join(".");
};
