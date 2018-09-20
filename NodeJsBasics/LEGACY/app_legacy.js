var app = require('./config/server.js'); //This is the basic configuration module of the app

/*
var sentence = require("./learn_modules"); 
//./ is a good practice which indicates that the file is on the same level as the source code.
*/

app.get("/news_form", function(req, res) {
  res.render("admin/news_form.ejs");
});

app.get("/news", function(req, res) {
  res.render("articles/politics.ejs");
});

app.get("/", function(req, res) {
  res.render("home/index.ejs");
});

/* These codes are the result of using Express without EJS and such remain commented because they are 
allegedly legacy implementations since Express + EJS should be better than just Express.

app.get('/', function(req, res) {
   res.send("<html><body><p>HELLOW WORLD BOYZ</p></body></html>"); 
});


 app.get('/politics', function(req, res) {
    res.send("<html><body><p> THIS IS NEWS ABOUT POLITICS! SHOUT!</p></body></html>"); 
 });

 */

app.listen(3000, function() {
  /*A commonly used name for fuctions that call other functions is "callback function". It is important
     to note that such name is imprecise, a more accurate name would be "call after function".
    A callback function is a function that is sucessfully called will call another function.*/

  console.log(
    "The server is now executing through the Express Framework \n CHEERS BOYZ \n A SMALL STEP FOR MEN, A BIG STEP TOWARDS EMPLOYMENT!"
  );
  /*Since the variable sentence is  a module's function, the line below will not execute because
  the function is not being called: 
    console.log(sentence); 

    But sentence can be called on its request line through:
    var sentence = request('./learn_modules')();

    It is important to make this point crystal clear: when request is used as a "call after" function
    these parentesis are necessary in order to effectively do the sequential calls.
    */
    // console.log(sentence()); //calling the sentence function stored in the sentence variable.
});
