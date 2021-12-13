export const loadState = () => {
  const state = localStorage.getItem('state');
  if (state === null) {
    return undefined;
  }
  return JSON.parse(state);
};

export const saveState = storeState => {
  const state = JSON.stringify(storeState);
  localStorage.setItem('state', state);
};
