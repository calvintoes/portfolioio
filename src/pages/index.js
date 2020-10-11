/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;
  console.log(`
 ________  ________  ___       ___      ___ ___  ________           _________  ________
|\   ____\|\   __  \|\  \     |\  \    /  /|\  \|\   ___  \        |\___   ___\\   __  \
\ \  \___|\ \  \|\  \ \  \    \ \  \  /  / | \  \ \  \\ \  \       \|___ \  \_\ \  \|\  \
 \ \  \    \ \   __  \ \  \    \ \  \/  / / \ \  \ \  \\ \  \           \ \  \ \ \  \\\  \
  \ \  \____\ \  \ \  \ \  \____\ \    / /   \ \  \ \  \\ \  \           \ \  \ \ \  \\\  \
   \ \_______\ \__\ \__\ \_______\ \__/ /     \ \__\ \__\\ \__\           \ \__\ \ \_______\
    \|_______|\|__|\|__|\|_______|\|__|/       \|__|\|__| \|__|            \|__|  \|_______| `);

  console.log("Designed and Built by Calvin To ");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Calvin To | Front End Engineer'}</title>
        <html lang={lang || 'en'} />
        <meta
          name="description"
          content={
            description ||
            'Front End Engineer helping people one website at a time. Reach out for any collaborations!'
          }
        />
      </Helmet>
      <App />
    </>
  );
};
