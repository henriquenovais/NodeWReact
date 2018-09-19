var app = require('./config/server.js'); //This is the basic configuration module of the app

var routeNews = require("./app/routes/news.js");
routeNews(app);

var routeHome = require("./app/routes/home.js");
routeHome(app);

var routeNewsForm = require("./app/routes/news_form.js");
routeNewsForm(app);

app.listen(3000, function() {
  console.log("Server at work");
});
