export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/api"
    : "somedeploy";

export const LOCAL_STORAGE_TOKEN_NAME = "learnit-mern";
