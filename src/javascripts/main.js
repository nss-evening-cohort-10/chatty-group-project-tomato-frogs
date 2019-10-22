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
  display.displayMessages(msgArray);
  navbar.addMsgEvent();
  dark.darkInit();
  size.sizeInit();
  display.displayMessages(msgArray);
  clearButton.clearFunc();
  display.deleteMsgEvent();
};

init();
