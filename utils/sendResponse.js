const sendResponse = ({ res, statusCode, message, data, error }) => {
  res.status(statusCode);
  const responseObject = {
    message,
    [`${error ? "error" : "data"}`]: error ? error : data,
  };
  return res.json(responseObject);
};

module.exports = sendResponse;
