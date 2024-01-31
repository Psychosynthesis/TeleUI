import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import * as Components from './src';

import './src/main.scss';

const container = document.getElementById('main-node');

// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(container!).render(
  <React.StrictMode>
	    <div>
        <h2>Teleapstyle Guide</h2>
        Teleapstyle is a lightweight components lib to easy build your Telegram mini-apps
        <br />
        AmountInput:
        <div><Components.AmountInput value={null} valueSetter={() => {}} placeholder="Placeholder" label="Label" units="%" /></div>
      </div>
  </React.StrictMode>,
)
