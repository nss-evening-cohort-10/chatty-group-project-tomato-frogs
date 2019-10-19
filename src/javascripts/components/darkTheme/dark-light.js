import $ from 'jquery';

const event = () => {
  $('#switch').on('click', () => {
    $('body').toggleClass('light dark');
    $('button').toggleClass('btn-outline-primary btn-outline-dark');
    $('textarea').toggleClass('light dark');
    $('nav').toggleClass('navToggleLight navToggleDark');
  });
};

export default { event };
