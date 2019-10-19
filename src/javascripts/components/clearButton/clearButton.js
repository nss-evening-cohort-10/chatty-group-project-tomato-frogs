import $ from 'jquery';
import msgData from '../../helpers/data/messages';
import display from '../display/display';

const emptyWords = () => {
  msgData.setMessages([]);
  display.displayMessages();
};


const clearFunc = () => {
  $('#clearButton').click(emptyWords);
};

export default { clearFunc };
