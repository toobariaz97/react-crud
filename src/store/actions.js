export const setAuth = (users) => {
    return {
      type: 'users',
      payload: users,
    };
  };