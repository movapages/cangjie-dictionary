export const isHan = line => !!line?.match(/^\p{sc=Han}$/u);
export const isLat = line => !!line?.match(/^[a-z*-]{1,5}$/iu);

export function sortArrKeys(arr) {
  let arrKeys = [];
  const resArr = [];
  for (let obj of arr) arrKeys.push(Object.keys(obj)[0]);
  const arrKeysVector = [...arrKeys];
  arrKeys = arrKeys.sort();
  for (let i = 0; i < arrKeys.length; i++) {
    resArr.push(arr[arrKeysVector.findIndex(el => el === arrKeys[i])]);
  }
  return resArr;
}