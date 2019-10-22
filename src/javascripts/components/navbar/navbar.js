import $ from 'jquery';
import messages from '../../helpers/data/messages';
import display from '../display/display';
import util from '../../helpers/utilities';

const addMessage = (event) => {
  if (event.key === 'Enter') {
    if ($('#text-area-id').val() !== '') {
      const newMsgObj = {};
      newMsgObj.messageId = util.idGenerator();
      newMsgObj.messageText = $('#text-area-id').val();
      newMsgObj.timeStamp = 'timestamp';
      event.preventDefault();
      messages.setMessages(newMsgObj);
      display.displayMessages(messages.getMessages());
      //test
    }
  }
};

const addMsgEvent = () => {
  $('body').keypress(addMessage);
};

export default { addMsgEvent };
