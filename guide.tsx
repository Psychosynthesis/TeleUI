import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import * as Components from './src';

import './src/main.scss';

const container = document.getElementById('main-node');
const useState = React.useState;

const Guide = () => {
  const [amountInputVal, setAmountInputVal] = useState(null);

  return (
    <div>
      <h2>Teleapstyle Guide</h2>
      Teleapstyle is a lightweight components lib to easy build your Telegram mini-apps.
      The main idea of Teleapstyle is to create a simple and minimalistic component library that
      would look as close as possible to the native design of Telegram Mini Apps.
      <br /><br />
      Please note - the components by default use the standard colors of the standard Telegram dark theme
      and don't use theme CSS variables (it is implemented in this order to not to update the package every time
      if vars changed in initData, due to TMA.js development), instead you can pass it to the components that
      support color-parameter, or just pass your own class and style them as you want.
      <br /><br />
      You can <a target="_blank" rel="noopener noreferrer" href="https://github.com/Psychosynthesis/Teleapstyle">suggest your improvements</a>, we will definitely consider them.

      <h3>Usage</h3>
      First add the library package with npm:<br />
      <pre>npm i teleapstyle</pre>
      <br /><br />
      You can simply import all the functions from the library:<br />
      <pre>import * as Components from 'teleapstyle';</pre>
      <pre>{`<Components.AmountInput ... /> // In this case you can use it like this`}</pre>
      <br /><br />
      Or just import only neccessary:
      <pre>{`import { AmountInput, Button } from 'teleapstyle';`}</pre>
      <br /><br />
      <hr />
      <br />
      <div className="component-row">
        <h3>AmountInput</h3>
        You can see a similar-looking component in the official
        <a href="https://t.me/wallet" target="_blank" rel="noopener noreferrer">@Wallet</a> bot (for example,
        when replenishing or entering the purchase amount). We've added an optional signature to the left.
        This component is used only for numeric input, for others use SimpleInput component.
        <br /><br />
        <div className="component-tips-label">Demo:</div>
        <Components.AmountInput
          value={amountInputVal}
          valueSetter={setAmountInputVal}
          placeholder="0"
          label="Buy"
          units="%"
          inputStyle={{ color: '#fff' }}
          max={100}
        />
        <div className="component-tips-label">Code:</div>
        <pre>
          {`<AmountInput
            value={amountInputVal}
            valueSetter={setAmountInputVal}
            placeholder="0"
            label="Buy"
            units="%"
            inputStyle={{ color: '#fff' }}
            max={100}
          />`}
        </pre>
      </div>
      <div className="component-row">
        <h3>Button</h3>
        This is just a button. No, really.
        May have an icon (see the Sprite section for available icons).
        But if the button is too small, the icon will not be displayed.
        You can pass a child element, such as a link or your own icon.
        <br /><br />
        <div className="component-tips-label">Demo:</div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Components.Button onClick={() => {}}>
            Just Button
          </Components.Button>

          <Components.Button
            onClick={() => {}}
            color="#f455ee"
          >
            Button with Icon & color
          </Components.Button>

          <Components.Button
            onClick={() => {}}
            type="outline"
            size={14}
            color="#ffffff"
          >
            Small outline Button
          </Components.Button>
        </div>
        <div className="component-tips-label">Code:</div>
        <pre>
          {`<Button onClick={clickHandler}>Just Button</Button>`}
        </pre>
        <pre>
          {`<Button onClick={clickHandler} icon="mask" color="#f455ee">Button with Icon</Button>`}
        </pre>
        <pre>
          {`<Button onClick={clickHandler} type="outline" size={14} color="#ffffff">Button with Icon</Button>`}
        </pre>
      </div>
    </div>
  )
}

// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(container!).render(
  <React.StrictMode>
    <Guide />
  </React.StrictMode>,
)
