module.exports = function(app) {
  app.get("/newsform", function(req, res) {
    res.render("admin/newsform.ejs");
  });

  app.post("/article/save", function(req, res) {
    var news = req.body;
     //body is where all the data sent through post will be saved. VERY IMPORTANT PROPERTY!
     //How to do this without body-parser?
    res.send(news);
  });
};
