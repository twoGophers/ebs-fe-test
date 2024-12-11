import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import './style.css';
import '../assets/global/Imports.scss';
import App from './App.tsx';
import { store } from '../store/store.tsx';

const root = document.getElementById('root')!;
createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
