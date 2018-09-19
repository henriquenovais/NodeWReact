module.exports = function(app){

app.get("/news", function(req, res) {
    res.render("articles/politics.ejs");
  });
  
}