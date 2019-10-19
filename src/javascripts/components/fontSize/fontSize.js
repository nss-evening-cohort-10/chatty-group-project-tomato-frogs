import $ from 'jquery';

const sizer = () => {
  $('#textSize').on('click', () => {
    for (let i = 10; i < 50; i += 1) {
      $('#bodySize').css('font-size', `${[i]}px`);
    }
  });
};

export default { sizer };
