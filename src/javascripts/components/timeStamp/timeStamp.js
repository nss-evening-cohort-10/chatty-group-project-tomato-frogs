import $ from 'jquery';
import moment from 'moment';
import m from '../../helpers/data/messages';

const addTimeStamp = () => {
  const messages = m.getMessages();
  const TimeStamp = moment().format();
  let domString = '';
  domString += `${TimeStamp}`;
  $('#test').html(domString);
};

export default { addTimeStamp };
