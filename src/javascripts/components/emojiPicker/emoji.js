import EmojiPicker from 'rm-emoji-picker';

// Next tell it where to listen for a click, the container it should be appended to, and the input/textarea/contenteditable it needs to work with
const icon = document.getElementById('my-icon');
const container = document.getElementById('container');
const editable = document.getElementById('my-input');

const picker = new EmojiPicker({
  sheets: {
    apple: '/sheets/sheet_apple_64_indexed_128.png',
    google: '/sheets/sheet_google_64_indexed_128.png',
    twitter: '/sheets/sheet_twitter_64_indexed_128.png',
    emojione: '/sheets/sheet_emojione_64_indexed_128.png',
  },
  show_colon_preview: true,

  // If you want your contenteditable to be a single-line input, set this to true
  prevent_new_line: false,

  // The text that will be displayed when no emoji is being hovered over.
  default_footer_message: 'Please select an emoji from the list above',

  // Can be "autoplace", "vertical", "horizontal", or a function that takes a tooltip as an argument.
  // The tooltip is an instance of the class in this repo here: https://github.com/RobertMenke/Tooltip-js
  positioning: 'autoplace',

  // When the user hovers over the top row of icons, do you want them to be shown
  // a tooltip indicating which category the icon represents?
  show_icon_tooltips: true,

  // Callback that occurs when an emoji gets selected. You get back Emoji, EmojiCategory, Node
  callback: (emoji, category, node) => {
    if (node instanceof HTMLELement) {
      node.classList.add('emoji-image');
    }
  },

  // This callback is called once the picker has fully parsed and created markup for each emoji
  // and emoji category
  onReady: (categories) => {
    // example of setting a particular category as active and then filtering its contents
    categories.setActiveCategoryByName('Activity');
    picker.active_category.filter((emoji) => emoji.matchesSearchTerm(new RegExp('soccer')));
    // some time later programmatically show all emojis
    setTimeout(() => {
      picker.active_category.showAllEmojis();
    }, 3000);
  },

  // Use sprite sheets to display image emojis rather than links to png files (faster).
  // If you want links to the png files see this repo here for examples (library I'm using):
  // https://github.com/iamcal/emoji-data
  use_sheets: true,

  // By default we show an magnifying glass icon in the search container,
  // but if you're not using fontawesome you may want to include your own icon.
  search_icon: '<i class="fa fa-search" aria-hidden="true"></i>',

  // Sets of categories and icons that denote sections at the top of the picker.
  // The category names are not arbitrary, they map to the names of categories in data.js.
  // By default, I'm assuming you're using FontAwesome because, well, why wouldn't you?!
  // If you want fewer categories, or different icons this is the place to configure that.
  categories: [
    {
      title: 'People',
      icon: '<i class="fa fa-smile-o" aria-hidden="true"></i>',
    },
    {
      title: 'Nature',
      icon: '<i class="fa fa-leaf" aria-hidden="true"></i>',
    },
    {
      title: 'Foods',
      icon: '<i class="fa fa-cutlery" aria-hidden="true"></i>',
    },
    {
      title: 'Activity',
      icon: '<i class="fa fa-futbol-o" aria-hidden="true"></i>',
    },
    {
      title: 'Places',
      icon: '<i class="fa fa-globe" aria-hidden="true"></i>',
    },
    {
      title: 'Symbols',
      icon: '<i class="fa fa-lightbulb-o" aria-hidden="true"></i>',
    },
    {
      title: 'Flags',
      icon: '<i class="fa fa-flag-checkered" aria-hidden="true"></i>',
    },
  ],
});

picker.listenOn(icon, container, editable);
