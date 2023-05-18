import App from './App';
import { createRoot } from 'react-dom/client';

import './styles/normalize.scss';
import './styles/global.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
