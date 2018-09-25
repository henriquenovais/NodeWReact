module.exports = function(application) {
  application.get("/newsform", function(req, res) {
    res.render("admin/newsform.ejs");
  });

  application.post("/article/save", function(req, res) {
    var newspiece = req.body;
    //body is where all the data sent through post will be saved. VERY IMPORTANT PROPERTY!
    //How to do this without body-parser?
    req.assert('title', 'The title obligatory').notEmpty();
    req.assert('abstract', 'The has to be an abstract in your publication').notEmpty();
    req.assert('author', 'The author is obligatory').notEmpty();
    req.assert('pub_date', 'The publishing data is obligatory').notEmpty();
    req.assert('content','There has to be some content in order to submit your article').notEmpty();

    var errors = req.validationErrors();

    if(errors){
      res.render("admin/newsform.ejs");
      return;

    }
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
