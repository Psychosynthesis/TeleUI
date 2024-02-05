# Teleapstyle
[![npm version](https://img.shields.io/npm/v/teleapstyle?color=%23047dec)](https://www.npmjs.org/package/teleapstyle)

Teleapstyle is a lightweight components lib to easily build your Telegram mini-apps. The main idea of Teleapstyle is to create a simple and minimalistic component library that would look as close as possible to the native design of Telegram Mini Apps.

Please note - the components by default use the standard colors of the standard Telegram light theme and don't use theme CSS variables (it is implemented in this order to not to update the package every time if vars changed in initData, due to TMA.js development), instead you can pass it to the components that support color-parameter, or just pass your own class.

You can [suggest your improvements](https://github.com/Psychosynthesis/Teleapstyle), we will definitely consider them.

**To explore full interactive guide please visit** https://psychosynthesis.github.io/Teleapstyle/ (work in progress now)

### Usage
First add the library package with npm: \
`npm i teleapstyle`

Next, you need to import styles from package (place this in top of your main(.jsx|.tsx) file): \
`import '/node_modules/teleapstyle/build/style.css';`

For use in your applications, simply import all the functions from the library: \
`import * as Components from 'teleapstyle';`

Or import only neccessary: \
`import { AmountInput, Button } from 'teleapstyle';`

### List of implemented components
 - AmountInput
 - Button
 - Checkbox
 - DotSlider
 - Loader
 - ProgressBar
 - Range
 - SimpleInput
 - Switch
 - Tabs
