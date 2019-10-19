import '../styles/main.scss';
import './components/navbar/navbar.scss';
import navbar from './components/navbar/navbar';
import dark from './components/dark-light';
import display from './components/display/display';

const init = () => {
  navbar.formEnter();
  dark.event();
  display.displayMessages();
};

init();
