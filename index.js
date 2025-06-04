const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

const COLORS = {
  red: ['\x1b[31m', 'color: red'],
  green: ['\x1b[32m', 'color: green'],
  yellow: ['\x1b[33m', 'color: yellow'],
  blue: ['\x1b[34m', 'color: blue'],
  magenta: ['\x1b[35m', 'color: magenta'],
  cyan: ['\x1b[36m', 'color: cyan'],
  white: ['\x1b[37m', 'color: white'],
  gray: ['\x1b[90m', 'color: gray'],
};

const STYLES = {
  bold: ['\x1b[1m', 'font-weight: bold'],
  italic: ['\x1b[3m', 'font-style: italic'],
  underline: ['\x1b[4m', 'text-decoration: underline'],
};

const RESET = '\x1b[0m';

const logCache = new Set();

function logStyled(styles, ...args) {
  const message = args.join(' ');
  const key = styles.join('|') + '|' + message;

  if (logCache.has(key)) {
    return; // skip duplicate log
  }

  logCache.add(key);

  if (isBrowser) {
    // Only extract browser CSS styles
    const browserStyles = styles
      .map(style => (style.includes(':') ? style : '')) // Skip ANSI codes
      .filter(Boolean)
      .join('; ');

    console.log(`%c${message}`, browserStyles);
  } else {
    // Only extract ANSI styles
    const nodeStyles = styles
      .map(style => (style.startsWith('\x1b') ? style : '')) // Skip CSS
      .join('');

    console.log(`${nodeStyles}${message}${RESET}`);
  }
}

// Clear cache on next tick so duplicates in same event loop tick are suppressed
setInterval(() => logCache.clear(), 0);

// Add colors
for (const [name, [nodeStyle, browserStyle]] of Object.entries(COLORS)) {
  console[name] = (...args) => logStyled([nodeStyle, browserStyle], ...args);
}

// Add styles
for (const [name, [nodeStyle, browserStyle]] of Object.entries(STYLES)) {
  console[name] = (...args) => logStyled([nodeStyle, browserStyle], ...args);
}

// Add combinations like console.boldRed
for (const [styleName, [styleCode, browserStyle]] of Object.entries(STYLES)) {
  for (const [colorName, [colorCode, browserColor]] of Object.entries(COLORS)) {
    const method = styleName + colorName.charAt(0).toUpperCase() + colorName.slice(1);
    console[method] = (...args) =>
      logStyled([styleCode + colorCode, browserStyle + ';' + browserColor], ...args);
  }
}

module.exports = {};
