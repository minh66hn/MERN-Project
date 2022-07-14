export const authReducer = (state, action) => {
  const { type, payload:{is} } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
      };
  }
};
