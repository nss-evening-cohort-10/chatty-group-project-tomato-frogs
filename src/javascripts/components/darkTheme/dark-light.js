import $ from 'jquery';

const light = () => {
  $('#light').on('click', () => {
    $('body').removeClass('light dark autumn honeycomb halloween');
    $('body').addClass('light');
    $('button').removeClass('btn-outline-dark btn-outline-danger btn-warning btn-outline-success');
    $('button').addClass('btn-outline-primary');
  });
};

const dark = () => {
  $('#dark').on('click', () => {
    $('body').removeClass('light dark autumn honeycomb halloween');
    $('body').addClass('dark');
    $('button').removeClass('btn-outline-primary btn-outline-danger btn-warning btn-outline-success');
    $('button').addClass('btn-outline-dark');
  });
};

const danger = () => {
  $('#danger').on('click', () => {
    $('body').removeClass('light dark honeycomb halloween');
    $('body').addClass('autumn');
    $('button').removeClass('btn-outline-primary btn-outline-dark btn-warning btn-outline-success');
    $('button').addClass('btn-outline-danger');
  });
};

const warning = () => {
  $('#warning').on('click', () => {
    $('body').removeClass('light dark autumn halloween');
    $('body').addClass('honeycomb');
    $('button').removeClass('btn-outline-primary btn-outline-dark btn-outline-danger btn-outline-success');
    $('button').addClass('btn-warning');
  });
};

const success = () => {
  $('#success').on('click', () => {
    $('body').removeClass('light dark autumn honeycomb');
    $('body').addClass('halloween');
    $('button').removeClass('btn-outline-primary btn-outline-dark btn-outline-danger btn-warning');
    $('button').addClass('btn-outline-success');
  });
};

const customBack = () => {
  const colorBack = document.getElementById('background');
  const colorFont = document.getElementById('text');
  const colorNav = document.getElementById('nav');
  const colorTextArea = document.getElementById('textarea');
  const colorDisplayMessage = document.getElementById('messageDisplay');
  const choiceBack = colorBack.value;
  const choiceFont = colorFont.value;
  const choiceNav = colorNav.value;
  const colorTextA = colorTextArea.value;
  const colorDisplayMess = colorDisplayMessage.value;
  $('body').css('background-color', `${choiceBack}`);
  $('body').css('color', `${choiceFont}`);
  $('nav').css('background-color', `${choiceNav}`);
  $('textarea').css('background-color', `${colorTextA}`);
  $('#display-messages').css('background-color', `${colorDisplayMess}`);
};

const save = () => {
  $('#save').on('click', () => {
    customBack();
  });
};

const darkInit = () => {
  light();
  dark();
  danger();
  warning();
  success();
  save();
};

export default { darkInit };
