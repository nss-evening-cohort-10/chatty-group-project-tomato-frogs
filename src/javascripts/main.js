import 'bootstrap';
import '../styles/main.scss';
import './components/navbar/navbar.scss';
import dark from './components/darkTheme/dark-light';
import display from './components/display/display';
import navbar from './components/navbar/navbar';
import size from './components/fontSize/fontSize';
import clearButton from './components/clearButton/clearButton';
import msgData from './helpers/data/messages';

const msgArray = msgData.getMessages();

const init = () => {
  navbar.addMsgEvent();
  dark.event();
  size.upSizer();
  size.downSizer();
  display.displayMessages(msgArray);
  clearButton.clearFunc();
};

init();
