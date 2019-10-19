// import moment from 'moment';
import $ from 'jquery';
import msgData from '../../helpers/data/messages';
import util from '../../helpers/utilities';
import './display.scss';

const displayMessages = (messagez) => {
  const messages = msgData.getMessages();
  const messageToDelete = messages.filter((message) => {
    if (message.messageId === messagez) {
      console.log(messageToDelete);
    }
  });
  let domString = '';
  domString += '<div class="container display-msg-container">';
  messages.forEach((message) => {
    domString += `
      <div class="message-row row">
        <div class="col-sm-8 message-text">
          <div class="row">
            ${message.userName}
          </div>
          <div class="row">
            ${message.messageText}
          </div>
        </div>
        <div class="col-sm timestamp">
          ${moment().format('LLL')}
        </div>
      </div>
      `;
  });
  domString += '</div>';
  util.printToDom('display-messages', domString);
};

$('body').on('click', '.btn btn-danger', () => {
  console.log('test');
});

export default { displayMessages };
