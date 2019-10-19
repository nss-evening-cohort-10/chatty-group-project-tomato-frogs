import '../styles/main.scss';
import './components/navbar/navbar.scss';
import navbar from './components/navbar/navbar';
import timeStamp from './components/timeStamp/timeStamp';

const init = () => {
  navbar.formEnter();
  timeStamp.addTimeStamp();
};

init();
