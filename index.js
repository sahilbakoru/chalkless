// chalkless/index.js

const COLORS = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',

  gray: '\x1b[90m',
  lightGray: '\x1b[37m',

  darkRed: '\x1b[31m',
  darkGreen: '\x1b[32m',
  darkYellow: '\x1b[33m',
  darkBlue: '\x1b[34m',
  darkMagenta: '\x1b[35m',
  darkCyan: '\x1b[36m',
};


const STYLES = {
  bold: { open: '\x1b[1m', close: '\x1b[22m' },
  italic: { open: '\x1b[3m', close: '\x1b[23m' },
  underline: { open: '\x1b[4m', close: '\x1b[24m' },
};

const RESET = '\x1b[0m';

function styleLog(openCodes, closeCodes, ...args) {
  console.log(openCodes + args.join(' ') + closeCodes);
}

// Add single color methods, e.g. console.red('text')
for (const [colorName, colorCode] of Object.entries(COLORS)) {
  console[colorName] = (...args) => styleLog(colorCode, RESET, ...args);
}

// Add single style methods, e.g. console.bold('text')
for (const [styleName, codes] of Object.entries(STYLES)) {
  console[styleName] = (...args) => styleLog(codes.open, codes.close + RESET, ...args);
}

// Add combined styles + colors, e.g. console.boldRed('text')
for (const [styleName, styleCodes] of Object.entries(STYLES)) {
  for (const [colorName, colorCode] of Object.entries(COLORS)) {
    const methodName = styleName + colorName.charAt(0).toUpperCase() + colorName.slice(1);
    console[methodName] = (...args) =>
      styleLog(styleCodes.open + colorCode, styleCodes.close + RESET, ...args);
  }
}

module.exports = {};
