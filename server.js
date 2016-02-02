import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ContactsApp from './app/component/contact-app.jsx';

const app = express();

app.set('views', './');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const contacts = JSON.parse(fs.readFileSync(__dirname + '/public/contacts.json', 'utf8'));

const ContactsAppFactory = React.createFactory(ContactsApp);

app.get('/', (request, response) => {
  const componentInstance = ContactsAppFactory({initialData:contacts});

  response.render('index', {
    reactInitialData:JSON.stringify(contacts),
    content:renderToString(componentInstance)
  });
});

app.listen(3000, () => console.log('Express app running on port 3000'));