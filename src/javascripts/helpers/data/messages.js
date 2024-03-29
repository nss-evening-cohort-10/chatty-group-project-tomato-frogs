let messages = [

  {
    messageId: 'message1',
    messageText: 'Uber is the largest transportation firm in the world without an actual fleet.',
    timeStamp: 'October 21, 2019 8:02 AM',
  },
  {
    messageId: 'message2',
    messageText: 'Amazon AWS had no completion for 12 years.',
    timeStamp: 'October 19, 2019 10:17 AM',
  },
  {
    messageId: 'message3',
    messageText: 'Airbnb is the #1 used platform for traveling around the world',
    timeStamp: 'October 17, 2019 6:35 PM',
  },
  {
    messageId: 'message4',
    messageText: 'WeWork has transformed not only the space where people work, but how they work.',
    timeStamp: 'October 15, 2019 5:35 AM',
  },
  {
    messageId: 'message5',
    messageText: '3D printing will impact the health care industry',
    timeStamp: 'October 2, 2019 12:14 PM',
  },
];

const getMessages = () => {
  if (messages.length > 19) {
    messages.pop();
    return messages;
  }
  return messages;
};

const setMessages = (msgObj) => {
  messages.unshift(msgObj);
};

const msgToDelete = (messageIdToDelete) => {
  messages = messages.filter((message) => message.messageId !== messageIdToDelete);
};

const deleteAll = () => {
  messages = [];
};

export default {
  getMessages,
  setMessages,
  msgToDelete,
  deleteAll,
};
