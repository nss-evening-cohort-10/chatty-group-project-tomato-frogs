import $ from 'jquery';

const sizer = () => {
  $('#textSize').on('click', () => {
    let fontSize = parseInt($('body').css('font-size'), 0);
    fontSize = `${fontSize + 1}px`;
    $('body').css({ 'font-size': fontSize });
  });
};

//   for (let i = 10; i < 50; i += 1) {
//     if (i < 12) {
//       $('#bodySize').css('font-size', `${[i]}px`);
//     }
//   }
// });

export default { sizer };
