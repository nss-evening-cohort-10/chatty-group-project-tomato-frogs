import 'bootstrap';
import '../styles/main.scss';
import './components/navbar/navbar.scss';
import dark from './components/darkTheme/dark-light';
import display from './components/display/display';
import navbar from './components/navbar/navbar';
import size from './components/fontSize/fontSize';
import clearButton from './components/clearButton/clearButton';


const init = () => {
  navbar.formEnter();
  dark.event();
  display.displayMessages();
  size.sizer();
  clearButton.clearFunc();
};

init();
