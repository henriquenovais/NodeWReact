var mysql = require("mysql");

var connMySQL = function() {
    console.log('Database connection stablished.');//Didatic code in order to explicitly declare when database is acessed
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "newsportal"
  });
};

/*
This is not an efficient implementation because returning a function of connection through
a module will make the server execute the connection multiple times, even when there are
no databases alterations to be done.

module.exports = function(){
            
            return mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '1234',
                database: 'newsportal'
            });
}
*/

module.exports = function() {
  //Now the connection function is stored in a variable
  //which can be called at any given time by Consign
  return connMySQL;
};
