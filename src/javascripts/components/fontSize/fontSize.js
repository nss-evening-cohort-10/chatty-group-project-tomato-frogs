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

const upSizerModal = () => {
  $('#modalUpSize').on('click', () => {
    let fontSize = parseInt($('#exampleModalCenter').css('font-size'), 0);
    fontSize = `${fontSize + 1}px`;
    $('#exampleModalCenter').css({ 'font-size': fontSize });
  });
};

const downSizerModal = () => {
  $('#modalDownSize').on('click', () => {
    let fontSize = parseInt($('#exampleModalCenter').css('font-size'), 0);
    fontSize = `${fontSize - 1}px`;
    $('#exampleModalCenter').css({ 'font-size': fontSize });
  });
};

export default {
  upSizer, downSizer, upSizerModal, downSizerModal,
};
