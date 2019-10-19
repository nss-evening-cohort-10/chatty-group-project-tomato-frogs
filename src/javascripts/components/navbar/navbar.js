import $ from 'jquery';
import add from '../addMessage/addMessage';
import util from '../../helpers/utilities';
import messages from '../../helpers/data/messages';

const onEnterCreateObj = () => {
  $('#text-area-id').keydown((event) => {
    const newObject = {};
    if (event.key === 'Enter') {
      const messageValue = $('#text-area-id').value();
      const messageId = util.idGenerator();
      const newMessage = add.createMessageObj(messageValue, messageId);
      return newMessage;
    }
    return newObject;
  });
};

export default { onEnterCreateObj };
