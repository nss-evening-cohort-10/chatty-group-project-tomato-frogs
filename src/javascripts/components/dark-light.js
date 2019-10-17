import $ from 'jquery';

const event = () => {
  $('#switch').on('click', () => {
    $('body').toggleClass('light dark');
  });
};

export default { event };
