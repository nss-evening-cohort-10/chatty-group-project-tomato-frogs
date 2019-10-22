import $ from 'jquery';
import moment from 'moment';
import util from '../../helpers/utilities';
import './display.scss';
import messages from '../../helpers/data/messages';

const displayMessages = (msgArray) => {
  let domString = '';
  domString += '<div class="container display-msg-container">';
  msgArray.forEach((message) => {
    domString += `
      <div class="message-row row msg" id="${message.messageId}">
        <div class="col-sm-8 message-text">
          <div class="row">
            ${message.messageText}
          </div>
        </div>
        <div class="col-sm timestamp">
          ${moment().format('LLL')}
        </div>
        <div class="col-sm">
        <button type="button" class="btn btn-danger delete">Delete</button>
        </div>
      </div>
      `;
  });
  domString += '</div>';
  util.printToDom('display-messages', domString);
};

const deleteMsgEvent = () => {
  $('body').on('click', '.delete', (event) => {
    event.preventDefault();
    console.log($(event.target).parents('.msg'));
    $(event.target).parents('.msg').attr('id');
    const idToDelete = $(event.target).parents('.msg').attr('id');
    messages.msgToDelete(idToDelete);
    displayMessages(messages.getMessages());
  });
};
deleteMsgEvent();


export default { displayMessages, deleteMsgEvent };
