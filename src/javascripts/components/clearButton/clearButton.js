import $ from 'jquery';

const emptyWords = () => {
  $('#display-messages').html('');
};


const clearFunc = () => {
  $('#clearButton').click(emptyWords);
};

export default { clearFunc };
