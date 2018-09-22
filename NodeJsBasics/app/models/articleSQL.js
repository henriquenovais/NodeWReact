/*
Models are basically a smaller version of modules with the same objective: organize
the application in different segments fascilitating maintenance and new implementations.

This model's purpose is to isolate SQL methods in one same file.
*/


module.exports = function(){

    this.getNews = function(connection, callback){
            connection.query("select * from article", callback);
    }

    this.getNewsPiece = function(connection, callback){
        connection.query("select * from article where id_article = 2",callback);
    }

    this.saveNewsPiece = function(newspiece, connection, callback){
        connection.query("insert into article set ?", newspiece, callback);
    }

    return this;
}