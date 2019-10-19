import $ from 'jquery';

const upSizer = () => {
  $('#upSize').on('click', () => {
    let fontSize = parseInt($('body').css('font-size'), 0);
    fontSize = `${fontSize + 1}px`;
    $('body').css({ 'font-size': fontSize });
  });
};

const downSizer = () => {
  $('#downSize').on('click', () => {
    let fontSize = parseInt($('body').css('font-size'), 0);
    fontSize = `${fontSize - 1}px`;
    $('body').css({ 'font-size': fontSize });
  });
};

export default { upSizer, downSizer };
