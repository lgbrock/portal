import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import FileBrowser, { Icons } from 'react-keyed-file-browser';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />,
		<FileBrowser files={[]} icons={Icons.FontAwesome(4)} />,
	</React.StrictMode>
);
