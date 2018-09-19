module.exports = function(app){
app.get("/newsform", function(req, res) {
    res.render("admin/news_form.ejs");
  });
}