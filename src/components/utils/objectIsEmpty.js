export const objectIsEmpty = (object) => {
  for (let element in object) {
    return false;
  }
  return true;
};
