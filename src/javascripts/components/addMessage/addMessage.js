
const createMessageObj = (message, id) => {
  const messageObj = {
    messageId: `${id}`,
    messageText: `${message}`,
    timeStamp: 'October 21, 2019 5:35 AM',
  };
  return messageObj;
};

export default { createMessageObj };
