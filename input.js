/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

let connection; 

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function(key) {

  // exit game via ctrl-c
  if (key === '\u0003') {
    //connection.disconnect();
    process.exit();
  }
  // move snake
  if (key === 'w'){
    connection.write("Move: up");
  }
  if (key === 'a'){
    connection.write("Move: left");
  }
  if (key === 's'){
    connection.write("Move: down");
  }
  if (key === 'd'){
    connection.write("Move: right");
  }
  // send canned message
  if (key === '1'){
    connection.write("Say: OWNED!");
  }
  if (key === '2'){
    connection.write("Say: hisss!");
  }
  if (key === '3'){
    connection.write("Say: shedding!");
  }
  
}

module.exports = {setupInput};