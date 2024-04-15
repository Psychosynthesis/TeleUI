# TeleUI
[![npm version](https://img.shields.io/npm/v/teleui?color=%23047dec)](https://www.npmjs.org/package/teleui)

«TeleUI» is a lightweight components lib to easy build your Telegram mini-apps. In fact, the library is simple and universal, so it can actually be used for the web to. The main idea of «TeleUI» is to create a simple and minimalistic component library which will allow you to create applications look alike to the official Telegram Mini Apps interface, however, we do not aim to COMPLETELY copy their style guide for many reasons.

It is much more important that the components weigh little and work quickly - this is the main goal.

Please note - the components by default use the standard colors of the standard Telegram light theme and don't use theme CSS variables (it is implemented in this order to not to update the package every time if vars changed in initData, due to TMA.js development), instead you can pass it to the components that support color-parameter, or just pass your own class.

Also, the library does not use any font settings - do it yourself as you see fit.

You can [suggest your improvements](https://github.com/Psychosynthesis/TeleUI), we will definitely consider them.

**To explore full interactive guide please visit** https://psychosynthesis.github.io/TeleUI/

### Usage
First add the library package with npm: \
`npm i teleui`

For use in your applications, simply import all the functions from the library: \
`import * as Components from 'teleui';`

Or import only neccessary: \
`import { AmountInput, Button } from 'teleui';`

### List of implemented components
 - [AmountInput](https://psychosynthesis.github.io/TeleUI#amount-input)
 - [Button](https://psychosynthesis.github.io/TeleUI#button-component)
 - [Checkbox](https://psychosynthesis.github.io/TeleUI#checkbox-component)
 - [DotSlider](https://psychosynthesis.github.io/TeleUI#dot-slider)
 - [Loader](https://psychosynthesis.github.io/TeleUI#loader-component)
 - [ProgressBar](https://psychosynthesis.github.io/TeleUI#progress-bar)
 - [Range](https://psychosynthesis.github.io/TeleUI#range-component)
 - SimpleInput (does not provide example yet)
 - [Switch](https://psychosynthesis.github.io/TeleUI#switch-component)
 - [Tabs](https://psychosynthesis.github.io/TeleUI#tabs-component)
