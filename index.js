import React, { useState, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Cron from 'react-cron-generator';
import { HEADER } from 'react-cron-generator';
import './style.css';

const options = {
  headers: [
    HEADER.MONTHLY,
    HEADER.WEEKLY,
    HEADER.MINUTES,
    HEADER.HOURLY,
    HEADER.DAILY,
    HEADER.CUSTOM,
  ],
};

const App = () => {
  const [title] = useState(`PingPong's Cron Generator`);
  const [cron, setCron] = useState('');

  const onChangeHandler = (event, cronValue) => {
    // console.log('event from cronJob handler...', event);
    // console.log('event from cronJob handler...', cronValue);
    setCron(event);
  };

  return (
    <div id="main">
      <h3>{title}</h3>
      <h4>Cron Expression : {cron}</h4>
      <Cron
        onChange={onChangeHandler}
        showResultText={false}
        showResultCron={false}
        options={options}
      />
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
