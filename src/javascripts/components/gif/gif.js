import $ from 'jquery';
import utilities from '../../helpers/utilities';

const gifMaker = () => {
  $('#searchgifs').on('click', () => {
    const xhr = $.get('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=VaVkZ691aDNtSCDJLLbsiKDDNQlgWwFG&limit=5');
    xhr.done((response) => {
      console.error('success got data', response);
      const jiffs = response.data;
      console.log(Object.values(jiffs));
      const arrays = Object.values(jiffs);
      arrays.forEach((array) => {
        utilities.printToDom('inner', `<img src='${array.images.original.url}'></img>`);
      });
    });
  });
};

// $('#inner').append('<img src="jiffs.images.original.url"/>');
// $('#inner').append('<img src="+jiffs[i].images.original.url"/>');

export default { gifMaker };
