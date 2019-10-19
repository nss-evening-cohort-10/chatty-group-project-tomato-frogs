import $ from 'jquery';
import moment from 'moment';


const addTimeStamp = () => {
  const TimeStamp = moment().format();
  let domString = '';
  domString += `${TimeStamp}`;
  $('#test').html(domString);
};

export default { addTimeStamp };
