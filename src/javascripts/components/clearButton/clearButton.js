import $ from 'jquery';

const emptyWords = () => {
  $('#displayedMessages').html('');
};


const clearFunc = () => {
  $('#clearButton').click(emptyWords);
};

export default { clearFunc };
