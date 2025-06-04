# Chalkless – (like Chalk, but no deps)

Simple, zero-dependency console styling utility for Node.js and browser.




## Features

- Log colored text easily: `console.red('text')`
- Styles like bold, italic, underline: `console.bold('text')`
- Combined styles & colors: `console.boldRed('text')`
- Works in both terminal and browser consoles
- No dependencies, tiny and lightweight
- Compatible with both Node.js and browser environments (including     React)

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

## Quick Start

```js
// CommonJS
require('chalkless');

// or ESM
import 'chalkless';

console.red('Hello in red!');
console.boldGreen('Bold green text');

```

## Usage

```js
require('chalkless'); 

or

import 'chalkless';  

```

## Colors & Styles Usage

### Basic Colors

```js
console.red('This is red text');
console.green('This is green text');
console.yellow('This is yellow text');
console.blue('This is blue text');
console.magenta('This is magenta text');
console.cyan('This is cyan text');
console.white('This is white text');
console.gray('This is gray text'); 
```
### Basic Styles

```js
console.bold('This is bold text');
console.italic('This is italic text');
console.underline('This is underlined text');
```

### Combined Styles and Colors
You can chain any `style` + `color` combo just by combining their names with camelCase like `styleColor`.
```js
console.boldRed('This is bold AND red text');
console.italicBlue('This is italic AND blue text');
console.underlineGreen('This is underlined AND green text');
console.boldMagenta('This is bold AND magenta text');
```
### Note:
 > Duplicate logs with the same styles and message in the same event loop tick are automatically suppressed to keep your console clean.

 ## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [GitHub repo](https://github.com/sahilbakoru/chalkless) and open a pull request.
