module.exports = function(app) {
  app.get("/newspiece", function(req, res) {
    var connection = app.config.dbConnection();
    var articleSQL = new app.app.models.ArticleDAO(connection);
  

    articleSQL.getNewsPiece(function(error, result) {
      res.render("articles/newspiece.ejs", { piecevar: result });
      //res.send(result);
    });
  });
};
