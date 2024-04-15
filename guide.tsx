import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import * as Components from './src';

const container = document.getElementById('main-node');
const useState = React.useState;

const Guide = () => {
    const [amountInputVal, setAmountInputVal] = useState(null);
    const [switchState, setSwitchState] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);

    return (
        <div>
            <h2>TeleUI Guide</h2>
            <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/teleui">«TeleUI»</a> is a lightweight components lib to easy build your Telegram mini-apps.
            In fact, the library is simple and universal, so it can actually be used for the web to.
            The main idea of «TeleUI» is to create a simple and minimalistic component library which will allow
            you to create applications look alike to the official Telegram Mini Apps interface, however,
            we do not aim to COMPLETELY copy their style guide for many reasons.
            <br /><br />
            <b>It is much more important that the components weigh little and work quickly - this is the main goal.</b>
            <br /><br />
            Please note - the components by default use the standard colors of the standard Telegram light theme
            and don't use theme CSS variables (it is implemented in this order to not to update the package every time
            if vars changed in initData, due to TMA.js development), instead you can pass it to the components that
            support color-parameter (or lineColor), or just pass your own class.
            <br /><br />
            Also, the library does not use any font settings - do it yourself as you see fit.
            <br /><br />
            You can <a target="_blank" rel="noopener noreferrer" href="https://github.com/Psychosynthesis/TeleUI">suggest your improvements</a>, we will definitely consider them.
            <h2><a id="about-usage">Usage</a></h2>
            First add the library package with npm:<br />
            <pre>npm i teleui</pre>
            <br /><br />
            You can simply import all the functions from the library:<br />
            <pre>import * as Components from 'teleui';</pre>
            <pre>{`<Components.AmountInput ... /> // In this case you can use it like this`}</pre>
            <br /><br />
            Or just import only neccessary:
            <pre>{`import { AmountInput, Button } from 'teleui';`}</pre>
            <br /><br />
            <hr />
            <br />
            <div className="component-row">
                <h3><a id="loader-component">Tabs</a></h3>
                The tabs are familiar to everyone, very simple and understandable.
                We didn’t even do the animation, but if you donate to us, maybe we’ll add it a little later.
                Pay attention to the format in which the content should be transferred (in the example below).
                <br /><br />
                <div className="component-tips-label">Demo:</div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Components.Tabs
                        tabs={[
                            { caption: 'First Tab', content: <div>Some nice content...</div> },
                            { caption: 'Second Tab', content: <div>Another good content...</div> },
                            { caption: 'Third Tab', content: <div>Any other content</div> },
                        ]}
                    />
                </div>
                <div className="component-tips-label">Code:</div>
                <pre>{`
                <Components.Tabs
                    tabs={[
                        { caption: 'First Tab', content: <div>Some nice content</div> },
                        { caption: 'Second Tab', content: <div>Another good content</div> },
                        { caption: 'Third Tab', content: <div>Any other content</div> },
                    ]}
                />
                `}</pre>
            </div>

            <div className="components-divider">· · ·</div>

            <div className="component-row">
                <h3><a id="amount-input">AmountInput</a></h3>
                You can see a similar-looking component in the official <a href="https://t.me/wallet" target="_blank" rel="noopener noreferrer">@Wallet</a> bot
                (for example, when replenishing or entering the purchase amount). We've added an optional signature to the left.
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
                <pre>{`
                const [amountInputVal, setAmountInputVal] = useState(null);
                // ...
                <AmountInput
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

            <div className="components-divider">· · ·</div>

            <div className="component-row">
                <h3><a id="button-component">Button</a></h3>
                This is just a button. No, really.
                You can pass a child element, such as a link or your own icon.
                <br /><br />
                <div className="component-tips-label">Demo:</div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Components.Button onClick={() => {}}>
                        Just Button
                    </Components.Button>

                    <Components.Button
                        onClick={() => {}}
                        color="#2f6ea5"
                    >
                        <img src="https://psychosynthesis.github.io/TeleUI/icon.png" /> Button with child & color
                    </Components.Button>

                    <Components.Button
                        onClick={() => {}}
                        type="outline"
                        size={15}
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
                    {`<Button onClick={clickHandler} color="#2f6ea5"><img src="https://psychosynthesis.github.io/TeleUI/icon.png" /> Button with child & color</Button>`}
                </pre>
                <pre>
                    {`<Button onClick={clickHandler} type="outline" size={15} color="#ffffff">Small outline Button</Button>`}
                </pre>
            </div>

            <div className="components-divider">· · ·</div>

            <div className="component-row">
                <h3><a id="switch-component">Switch</a></h3>
                Switch-like select
                <br /><br />
                <div className="component-tips-label">Demo:</div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Components.Switch
                        selected={switchState}
                        switchHandler={() => setSwitchState(!switchState)}
                        color="#50a7ea"
                        defaultColor="#bbb" />
                </div>
                <div className="component-tips-label">Code:</div>
                <pre>{`
                <Switch
                    selected={switchState} // boolean
                    switchHandler={() => setSwitchState(!switchState)}
                    color="#50a7ea"
                    defaultColor="#bbb"
                />
                `}</pre>
            </div>

            <div className="components-divider">· · ·</div>

            <div className="component-row">
                <h3><a id="checkbox-component">Checkbox</a></h3>
                Simple checkbox
                <br /><br />
                <div className="component-tips-label">Demo:</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <Components.Checkbox text="Just checkbox" checked={switchState} valueSetter={() => setSwitchState(!switchState)} />
                    <div>&nbsp;</div>
                    <Components.Checkbox text="Rounded checkbox" checked={switchState} valueSetter={() => {}} rounded />
                </div>
                <div className="component-tips-label">Code:</div>
                <pre>{`
                <Components.Checkbox
                    text="Just checkbox"
                    checked={switchState} // boolean
                    valueSetter={() => setSwitchState(!switchState)}
                />
                `}</pre>
                <pre>{`
                <Components.Checkbox
                    text="Rounded checkbox"
                    checked={switchState}
                    valueSetter={() => {}}
                    rounded
                />
                `}</pre>
            </div>

            <div className="components-divider">· · ·</div>

            <div className="component-row">
                <h3><a id="loader-component">Loader</a></h3>
                Just a simplest spinner
                <br /><br />
                <div className="component-tips-label">Demo:</div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Components.Loader size={30} />
                </div>
                <div className="component-tips-label">Code:</div>
                <pre>
                    {`<Components.Loader />`}
                </pre>
            </div>

            <div className="components-divider">· · ·</div>

            <div className="component-row">
                <h3><a id="progress-bar">Progress bar</a></h3>
                You won't believe this... is simple progress bar.
                <br /><br />
                <div className="component-tips-label">Demo:</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <Components.ProgressBar completed={47} color="#9bfecf" />
                    <div>&nbsp;</div>
                    <Components.ProgressBar completed={67} color="#4ddd1f" backgroundColor="#33aa2a" size={4} />
                </div>
                <div className="component-tips-label">Code:</div>
                <pre>
                    {`<Components.ProgressBar completed={47} color="#9bfecf" />`}
                </pre>
                <pre>
                    {`<Components.ProgressBar completed={67} color="#4ddd1f" backgroundColor="#33aa2a" size={4} />`}
                </pre>
            </div>

            <div className="components-divider">· · ·</div>

            <div className="component-row">
                <h3><a id="dot-slider">Dot slider</a></h3>
                Discrete selection component. Component for selecting discrete values.
                Convenient if non-numeric values are used as selected units.
                There is support for the touchscreen (maybe we will improve it a little more in the future).
                <br /><br />
                <div className="component-tips-label">Demo:</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <Components.DotSlider
                        lineColor="#33fedf"
                        values={[
                            { value: '12', caption: '12%', selected: true },
                            { value: '24', caption: '24%', selected: false },
                            { value: '46', caption: '46%', selected: false },
                            { value: '72', caption: '72%', selected: false },
                            { value: '88', caption: '88%', selected: false }
                        ]}
                        valueSetter={() => {}}
                    />
                </div>
                <div className="component-tips-label">Code:</div>
                <pre>{`
                <Components.DotSlider
                    lineColor="#33fedf"
                    values={[
                        { value: '12', caption: '12%', selected: true },
                        { value: '24', caption: '24%', selected: false },
                        { value: '46', caption: '46%', selected: false },
                        { value: '72', caption: '72%', selected: false },
                        { value: '88', caption: '88%', selected: false }
                    ]}
                    valueSetter={() => {}}
                />
                `}</pre>
            </div>

            <div className="components-divider">· · ·</div>

            <div className="component-row">
                <h3><a id="range-component">Range</a></h3>
                The component is convenient for discrete selection of numeric values
                <br /><br />
                <div className="component-tips-label">Demo:</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <Components.Range
                        lineColor="#55cdff"
                        step={5}
                        value={rangeValue}
                        valueSetter={setRangeValue}
                        min={10}
                        max={100}
                    />
                </div>
                <div className="component-tips-label">Code:</div>
                <pre>{`
                const [rangeValue, setRangeValue] = useState(40);
                // ...
                <Components.Range
                    lineColor="#55cdff"
                    step={4}
                    value={rangeValue}
                    valueSetter={setRangeValue}
                    min={10}
                    max={100}
                />
                `}</pre>
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
