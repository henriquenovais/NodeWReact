module.exports = function(application) {
  application.get("/newsform", function(req, res) {
    res.render("admin/newsform.ejs");
  });

  application.post("/article/save", function(req, res) {
    var newspiece = req.body;
    //body is where all the data sent through post will be saved. VERY IMPORTANT PROPERTY!
    //How to do this without body-parser?

    var connection = application.config.dbConnection();
    var articleSQL = new application.app.models.ArticleDAO(connection);
    

    articleSQL.saveNewsPiece(newspiece, function(error, result) {
      res.redirect("/news");
      //Very important to use the redirect method otherwise the server
      //will be vulnerable to infinite MySQL injections.
      //res.send();
    });
  });
};
