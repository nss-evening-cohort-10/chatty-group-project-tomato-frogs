// import $ from 'jquery';
import msgData from '../../helpers/data/messages';
import util from '../../helpers/utilities';

import './display.scss';

const displayMessages = () => {
  const messages = msgData.getMessages();
  let domString = '';
  domString += '<div class="container display-msg-container"></div>';
  messages.forEach((message) => {
    domString += `<div class="row">
        <div class="col-sm-2 user-icon">
          <div class="row"> <img class="display-img" src="${message.userIcon}" /> </div>
          <div class="row"> ${message.userName} </div>
        </div>
        <div class="col-sm-8 message-text">
          ${message.messageText}
        </div>
        <div class="col-sm">
          timestamp
        </div>
      </div>`;
  });
  domString += '</div>';
  util.printToDom('display-messages', domString);
};

export default { displayMessages };
