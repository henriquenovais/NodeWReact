
module.exports = function(app) {


  app.get("/newspiece", function(req, res) {
    var connection = app.config.dbConnection();
    var articleSQL = app.app.models.articleSQL();

    articleSQL.getNewsPiece(connection, function(error, result) {
      res.render("articles/newspiece.ejs", { piecevar: result });
    //res.send(result);
    });
  });
};
