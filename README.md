# TeleUI
[![npm version](https://img.shields.io/npm/v/teleapstyle?color=%23047dec)](https://www.npmjs.org/package/teleapstyle)

TeleUI is a lightweight components lib to easily build your Telegram mini-apps. The main idea of TeleUI is to create a simple and minimalistic component library that would look as close as possible to the native design of Telegram Mini Apps.

Please note - the components by default use the standard colors of the standard Telegram light theme and don't use theme CSS variables (it is implemented in this order to not to update the package every time if vars changed in initData, due to TMA.js development), instead you can pass it to the components that support color-parameter, or just pass your own class.

You can [suggest your improvements](https://github.com/Psychosynthesis/TeleUI), we will definitely consider them.

**To explore full interactive guide please visit** https://psychosynthesis.github.io/TeleUI/ (work in progress now)

### Usage
First add the library package with npm: \
`npm i teleapstyle`

For use in your applications, simply import all the functions from the library: \
`import * as Components from 'teleapstyle';`

Or import only neccessary: \
`import { AmountInput, Button } from 'teleapstyle';`

### List of implemented components
 - [https://psychosynthesis.github.io/TeleUI#amount-input](AmountInput)
 - [https://psychosynthesis.github.io/TeleUI#button-component](Button)
 - [https://psychosynthesis.github.io/TeleUI#checkbox-component](Checkbox)
 - [https://psychosynthesis.github.io/TeleUI#dot-slider](DotSlider)
 - [https://psychosynthesis.github.io/TeleUI#loader-component](Loader)
 - [https://psychosynthesis.github.io/TeleUI#progress-bar](ProgressBar)
 - [https://psychosynthesis.github.io/TeleUI#range-component](Range)
 - [https://psychosynthesis.github.io/TeleUI#simple-input](SimpleInput)
 - [https://psychosynthesis.github.io/TeleUI#switch-component](Switch)
 - [https://psychosynthesis.github.io/TeleUI#tabs-component](Tabs)
