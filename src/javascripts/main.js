import 'bootstrap';
import '../styles/main.scss';
import './components/navbar/navbar.scss';
import navbar from './components/navbar/navbar';
import clearButton from './components/clearButton/clearButton';

const init = () => {
  navbar.formEnter();
  clearButton.clearFunc();
};

init();
