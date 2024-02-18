export const getItem = (id, arr) => {
  return arr.find(item => item.id === id);
};
