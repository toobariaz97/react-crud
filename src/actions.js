
export const setAuth = (user) => {
  return {
    type: 'SET_USER',
    payload: user,
  };
};