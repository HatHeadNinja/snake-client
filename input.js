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
  // \u0003 maps to ctrl+c input
  // console.log(key);
  if (key === '\u0003') {
    //conn.disconnect();
    process.exit();
  }
  if (key === 'w'){
    connection.write("Move: up");
    //console.log("\033[F");
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
  
}

module.exports = {setupInput};