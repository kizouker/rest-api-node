const express = require('express');
//import "express.js"
const app = express();
const debug = require('debug')('http');

if (debug.enabled) {
  console.log("debug enabled")
}

app.set('view engine', 'pug');
console.log("Hello server")


app.get("/messages", (req, res) => {
    res.send(data);
})


app.get("/messages/1", (req, res) => {
  res.send(data["1"]);
})

app.get("/messages/2", (req, res) => {
  res.send(data["2"]);
})

app.get("/messages/3", (req, res) => {
  res.send(data["3"]);
})

app.get("/messages/4", (req, res) => {
  res.send(data["4"]);
})
var data = {
  "1" : "Message #1",
  "2" : "Message #2",
  "3" : "Message #3",
  "4" : "Message #4"
};

// skilj på map key:value pair
// och arrayer ---- index => data
// vad vill jag ha här?
//
  // debug(req.method + ' ' + req.url);
  //   res.send("Hello world");
  //   res.render('index', {
  //       title: "Titel",
  //       message : "hej baberibba"
  //   } )});

app.listen(3000);


// för att göra en post så måste man skicka in något
// hur ser det ut?

//app.post
//app.delete
//app.put
