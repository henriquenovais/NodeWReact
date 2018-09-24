//var dbconnection = require("./../../config/dbConnection.js");

module.exports = function(application) {
  /*
  app.get("/news", function(req, res) {

    /*
    var connection = dbconnection();

    connection.query("select * from article", function(error, result) {
      //res.send(result);
      res.render("articles/news.ejs", { newsvar: result });
    });
    //res.render("articles/politics.ejs");
  });
  

  });
  */

  application.get("/news", function(req, res) {
    var connection = application.config.dbConnection();
    var articleSQL = new application.app.models.ArticleDAO(connection);
    

    articleSQL.getNews(function(error, result) {
      res.render("articles/news.ejs", { newsvar: result });
      //res.send(result);
    });
  });
};
