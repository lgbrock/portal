import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import { setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';

setChonkyDefaults({ iconComponent: ChonkyIconFA });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
