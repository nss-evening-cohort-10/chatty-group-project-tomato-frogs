import $ from 'jquery';
import msgData from '../../helpers/data/messages';
import display from '../display/display';

const emptyWords = () => {
  let emptyArr = msgData.setMessages();
  emptyArr = [];
  display.displayMessages(emptyArr);
};


const clearFunc = () => {
  $('#clearButton').click(emptyWords);
};

export default { clearFunc };
