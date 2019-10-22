import $ from 'jquery';
import moment from 'moment';
import util from '../../helpers/utilities';
import './display.scss';
import messages from '../../helpers/data/messages';

const displayMessages = (msgArray) => {
  let domString = '';
  domString += '<div class="container display-msg-container">';
  msgArray.forEach((message) => {
    if (message.messageId[0] === 'm') {
      domString += `
      <div class="message-row row msg" id="${message.messageId}">
        <div class="col-sm-8 message-text">
          <div class="row">
            ${message.messageText}
          </div>
        </div>
        <div class="col-sm timestamp d-flex flex-items-end">
          <div class="row align-self-end">
          ${message.timeStamp}
          </div>
          <div class="row">
            <i class="fas fa-times delete"></i>
          </div>
        </div>
      </div>
      `;
    } else {
      domString += `
      <div class="message-row row msg" id="${message.messageId}">
        <div class="col-sm-8 message-text">
          <div class="row">
            ${message.messageText}
          </div>
        </div>
        <div class="col-sm timestamp d-flex flex-items-end">
          <div class="row align-self-end">
          ${moment().format('LLL')}
          </div>
          <div class="row">
            <i class="fas fa-times delete"></i>
          </div>
        </div>
      </div>
      `;
    }
  });
  domString += '</div>';
  util.printToDom('display-messages', domString);
};

// <button type="button" class="btn btn-danger delete">Delete</button>

const deleteMsgEvent = () => {
  $('body').on('click', '.delete', (event) => {
    event.preventDefault();
    // console.log($(event.target).parents('.msg'));
    $(event.target).parents('.msg').attr('id');
    const idToDelete = $(event.target).parents('.msg').attr('id');
    messages.msgToDelete(idToDelete);
    displayMessages(messages.getMessages());
  });
};

export default { displayMessages, deleteMsgEvent };
