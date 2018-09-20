var dbconnection = require("./../../config/dbConnection.js");

module.exports = function(app) {
  app.get("/news", function(req, res) {
    var connection = dbconnection();

    connection.query("select * from article", function(error, result) {
      //res.send(result);
      res.render("articles/news.ejs", { newsvar: result });
    });
    //res.render("articles/politics.ejs");
  });
};
