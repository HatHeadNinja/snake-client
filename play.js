// play.js
const { connect } = require('./client');
console.log('Connecting ...');
const conn = connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

// disconnect and exit process on ^C
const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  console.log(key);
  if (key === '\u0003') {
    conn.disconnect();
    process.exit();
  }
}

