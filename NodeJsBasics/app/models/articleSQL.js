module.exports = function(){

    this.getNews = function(connection, callback){
            connection.query("select * from article", callback);
    }

    this.getNewsPiece = function(connection, callback){
        connection.query("select * from article where id_article = 2",callback);
    }
    return this;
}