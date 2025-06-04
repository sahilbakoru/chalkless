# Chalkless – (like Chalk, but no deps)

Simple, zero-dependency console styling utility for Node.js and browser.

## Features

- Log colored text easily: `console.red('text')`
- Styles like bold, italic, underline: `console.bold('text')`
- Combined styles & colors: `console.boldRed('text')`
- Works in both terminal and browser consoles
- No dependencies, tiny and lightweight

## Available Colors

- black, red, green, yellow, blue, magenta, cyan, white
- gray, lightGray
- darkRed, darkGreen, darkYellow, darkBlue, darkMagenta, darkCyan
- brightBlack, brightRed, brightGreen, brightYellow, brightBlue, brightMagenta, brightCyan, brightWhite

## Available Styles

- bold, italic, underline


##  Installation
```bash
npm install chalkless
```


## Usage

```js
require('chalkless');

// Simple colors
console.red('This is red text');
console.green('This is green text');

// Styles
console.bold('Bold text');
console.italic('Italic text');
console.underline('Underlined text');

// Combined styles and colors
console.boldRed('Bold red text');
console.italicGreen('Italic green text');
console.underlineBrightBlue('Underlined bright blue text');

```
