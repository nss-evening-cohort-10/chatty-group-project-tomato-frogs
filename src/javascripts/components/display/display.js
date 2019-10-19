import moment from 'moment';
import util from '../../helpers/utilities';
import './display.scss';


const displayMessages = (msgArray) => {
  let domString = '';
  domString += '<div class="container display-msg-container">';
  msgArray.forEach((message) => {
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
