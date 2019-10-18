import '../styles/main.scss';
import './components/navbar/navbar.scss';
import navbar from './components/navbar/navbar';
import dark from './components/darkTheme/dark-light';
import size from './components/fontSize/fontSize';

const init = () => {
  navbar.formEnter();
  dark.event();
  size.sizer();
};

init();
