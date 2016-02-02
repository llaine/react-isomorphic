import React from 'react';
import { render } from 'react-dom';
import ContactsApp from './app/component/contact-app.jsx';

let initialData = document.getElementById('initial-data').textContent;

if(initialData.length > 0) {
  initialData = JSON.parse(initialData);
}

render(<ContactsApp initialData={initialData} />, document.getElementById('root'));