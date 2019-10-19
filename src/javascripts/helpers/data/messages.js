let messages = [

  {
    messageId: 'message1',
    messageText: 'Uber is the largest transportation firm in the world without an actual fleet.',
    timeStamp: 'October 15, 2019 8:02 AM',
    userIcon: 'src/assets/images/uber.png',
    userName: '@Dara_K',
  },
  {
    messageId: 'message2',
    messageText: 'Amazon AWS had no completion for 12 years.',
    timeStamp: 'October 2, 2019 10:17 AM',
    userIcon: 'src/assets/images/amazon.png',
    userName: '@Jeff_B',
  },
  {
    messageId: 'message3',
    messageText: 'Airbnb is the #1 used platform for traveling around the world',
    timeStamp: 'October 7, 2019 6:35 PM',
    userIcon: 'src/assets/images/airbnb.png',
    userName: '@Brian_C',
  },
  {
    messageId: 'message4',
    messageText: 'WeWork has transformed not only the space where people work, but how they work.',
    timeStamp: 'October 21, 2019 5:35 AM',
    userIcon: 'src/assets/images/wework.png',
    userName: '@Sebastian_G',
  },
  {
    messageId: 'message5',
    messageText: '3D printing will impact the health care industry',
    timeStamp: 'October 2, 2019 12:14 PM',
    userIcon: 'src/assets/images/3dprinting.jpeg',
    userName: '@USHealth_Dept',
  },
];

const getMessages = () => messages;
const setMessages = (newArr) => {
  messages = newArr;
};

export default { getMessages, setMessages };
