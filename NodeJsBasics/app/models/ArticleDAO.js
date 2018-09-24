function ArticleDAO(connection){
    this._connection = connection;
}

ArticleDAO.prototype.getNews = function(callback){
    this._connection.query("select * from article", callback);
}

ArticleDAO.prototype.getNewsPiece = function(callback){
    this._connection.query("select * from article where id_article = 2",callback);
}

ArticleDAO.prototype.saveNewsPiece = function(newspiece, callback){
    this._connection.query("insert into article set ?", newspiece, callback);

}

module.exports = function(){
    return ArticleDAO;
}