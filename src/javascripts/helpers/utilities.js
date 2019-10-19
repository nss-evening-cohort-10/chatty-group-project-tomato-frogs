import $ from 'jquery';

const printToDom = (divId, string) => {
  $(`#${divId}`).html(string);
};

const idGenerator = () => `K${Math.random().toString(36).substr(2, 9)}`;

export default { printToDom, idGenerator };
