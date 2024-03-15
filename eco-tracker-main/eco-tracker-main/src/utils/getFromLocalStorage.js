export const getFromLocalStorage = (key, defaultValue = []) => {
  const itemsFromLS = JSON.parse(localStorage.getItem(key));

  return !itemsFromLS ? defaultValue : itemsFromLS;
};
