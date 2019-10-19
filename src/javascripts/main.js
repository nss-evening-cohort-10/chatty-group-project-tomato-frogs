import '../styles/main.scss';
import './components/navbar/navbar.scss';
import 'bootstrap';
import dark from './components/darkTheme/dark-light';
import display from './components/display/display';
import navbar from './components/navbar/navbar';
import size from './components/fontSize/fontSize';


const init = () => {
  navbar.formEnter();
  dark.event();
  size.upSizer();
  size.downSizer();
  size.upSizerModal();
  size.downSizerModal();
  display.displayMessages();
};

init();
