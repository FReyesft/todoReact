import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/pages/Home/App';
import { FormProvider } from './app/context/FormContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<FormProvider>
		<App />
	</FormProvider>
);
