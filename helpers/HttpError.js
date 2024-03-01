const HttpError = (status, message = "Not Found") => {
  const error = new Error(message);
  error.status = status;
  return error;
};

export default HttpError;
