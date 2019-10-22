import $ from 'jquery';

const light = () => {
  $('body').removeAttr('style');
  $('nav').removeAttr('style');
  $('textarea').removeAttr('style');
  $('#display-messages').removeAttr('style');
  $('body').removeClass('dark autumn honeycomb halloween custom');
  $('body').addClass('light');
  $('button').removeClass('btn-outline-dark btn-outline-danger btn-warning btn-outline-success btn-outline-info');
  $('button').addClass('btn-outline-primary');
};

const dark = () => {
  $('body').removeAttr('style');
  $('nav').removeAttr('style');
  $('textarea').removeAttr('style');
  $('#display-messages').removeAttr('style');
  $('body').removeClass('light autumn honeycomb halloween custom');
  $('body').addClass('dark');
  $('button').removeClass('btn-outline-primary btn-outline-danger btn-warning btn-outline-success btn-outline-info');
  $('button').addClass('btn-outline-dark');
};

const danger = () => {
  $('body').removeAttr('style');
  $('nav').removeAttr('style');
  $('textarea').removeAttr('style');
  $('#display-messages').removeAttr('style');
  $('body').removeClass('light dark honeycomb halloween custom');
  $('body').addClass('autumn');
  $('button').removeClass('btn-outline-primary btn-outline-dark btn-warning btn-outline-success btn-outline-info');
  $('button').addClass('btn-outline-danger');
};

const warning = () => {
  $('body').removeAttr('style');
  $('nav').removeAttr('style');
  $('textarea').removeAttr('style');
  $('#display-messages').removeAttr('style');
  $('body').removeClass('light dark autumn halloween custom');
  $('body').addClass('honeycomb');
  $('button').removeClass('btn-outline-primary btn-outline-dark btn-outline-danger btn-outline-success btn-outline-info');
  $('button').addClass('btn-warning');
};

const success = () => {
  $('body').removeAttr('style');
  $('nav').removeAttr('style');
  $('textarea').removeAttr('style');
  $('#display-messages').removeAttr('style');
  $('body').removeClass('light dark autumn honeycomb custom');
  $('body').addClass('halloween');
  $('button').removeClass('btn-outline-primary btn-outline-dark btn-outline-danger btn-warning btn-outline-info');
  $('button').addClass('btn-outline-success');
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
  $('body').removeClass('light dark autumn honeycomb halloween');
  $('body').addClass('custom');
  $('.custom').css('background-color', `${choiceBack}`);
  $('.custom').css('color', `${choiceFont}`);
  $('.custom nav').css('background-color', `${choiceNav}`);
  $('.custom textarea').css('background-color', `${colorTextA}`);
  $('.custom #display-messages').css('background-color', `${colorDisplayMess}`);
  $('button').removeClass('btn-outline-primary btn-outline-dark btn-outline-danger btn-warning btn-outline-success');
  $('button').addClass('btn-outline-info');
};

const save = () => {
  $('#save').on('click', () => {
    const customButton = document.getElementById('custom');
    const lightButton = document.getElementById('light');
    const darkButton = document.getElementById('dark');
    const dangerButton = document.getElementById('danger');
    const warningButton = document.getElementById('warning');
    const successButton = document.getElementById('success');
    if (customButton.checked === true) {
      customBack();
    } else if (lightButton.checked === true) {
      light();
    } else if (darkButton.checked === true) {
      dark();
    } else if (dangerButton.checked === true) {
      danger();
    } else if (warningButton.checked === true) {
      warning();
    } else if (successButton.checked === true) {
      success();
    }
  });
};

const darkInit = () => {
  save();
};

export default { darkInit };
