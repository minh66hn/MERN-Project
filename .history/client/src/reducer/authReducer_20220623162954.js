export const authReducer = (state, action) => {
  const { type, payload:{isAu} } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
      };
  }
};
