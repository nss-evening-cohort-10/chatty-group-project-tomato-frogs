import moment from 'moment';
import msgData from '../../helpers/data/messages';
import util from '../../helpers/utilities';
import './display.scss';


const displayMessages = () => {
  const messages = msgData.getMessages();
  let domString = '';
  domString += '<div class="container display-msg-container">';
  messages.forEach((message) => {
    domString += `
      <div class="message-row row">
        <div class="col-sm-8 message-text">
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

export default { displayMessages };
