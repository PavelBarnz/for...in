/* eslint-disable array-callback-return */
export default function sortByProp(obj, arr) {
  function sortAlphabetically(a, b) {
    if (a[0][0][0] < b[0][0][0]) return -1;
    if (a[0][0][0] > b[0][0][0]) return 1;
    return 0;
  }

  const result = [];

  for (const key in obj) {
    if (arr.includes(key)) {
      result[arr.indexOf(key)] = { key, value: obj[key] };
    }
  }

  let otherProp = Object.entries(obj);
  // eslint-disable-next-line consistent-return
  otherProp = otherProp.filter((item, i) => {
    if (!arr.includes(otherProp[i][0])) return item;
  });

  otherProp.sort(sortAlphabetically);

  otherProp.forEach((item) => {
    result.push({ key: item[0], value: item[1] });
  });

  return result;
}
