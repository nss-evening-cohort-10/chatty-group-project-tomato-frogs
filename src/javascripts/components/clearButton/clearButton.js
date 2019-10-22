import $ from 'jquery';
import msgData from '../../helpers/data/messages';
import display from '../display/display';

const emptyWords = () => {
  msgData.deleteAll();
  const messages = msgData.getMessages();
  display.displayMessages(messages);
};

const clearFunc = () => {
  $('#clearButton').click(emptyWords);
};

export default { clearFunc };
