import $ from 'jquery';

const formEnter = () => {
  $('#exampleFormControlTextarea1').submit(() => console.log($('#exampleFormControlTextarea1').value()));
};

export default { formEnter };
