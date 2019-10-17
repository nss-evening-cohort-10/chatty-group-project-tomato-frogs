import '../styles/main.scss';
import './components/navbar/navbar.scss';
import navbar from './components/navbar/navbar';
import dark from './components/dark-light';

const init = () => {
  navbar.formEnter();
  dark.event();
};

init();
