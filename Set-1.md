**Set - 1 Document**


**index.js**

exp=require("express")

app=exp()

app.listen(1000)

cr=require("cors")

app.use(cr())

mjs=require("mongojs")

oid=require("mongojs").ObjectID

bp=require("body-parser")

app.use(bp.json())

const MongoClient = require("mongodb");

conn=mjs("mongodb://localhost:27017/setone")

/////

app.get("/getdata",(req,res)=>{

conn.information.find((err,result)=>{

`    `res.send(result)

})

//res.send("hello");

});

// Configuring body parser middleware

app.use(bp.urlencoded({ extended: false }));

app.use(bp.json());

//Submit Data

app.post('/savedata', (req, res) => {

`    `const information = req.body;

`    `// Output the book to the console for debugging



`    `conn.information.insertOne(information, (err, result) => {

`        `//result.send('Book is added to the database');

`    `})

`    `res.send('Data store to the database');

});


Run : **nodemon server index.js;**

**Database Name : setone**

**Collection *:* information**



![](Aspose.Words.2f5eb4ed-6ae7-4641-8903-9b360ac8d17e.001.png)![](Aspose.Words.2f5eb4ed-6ae7-4641-8903-9b360ac8d17e.002.png)


![](Aspose.Words.2f5eb4ed-6ae7-4641-8903-9b360ac8d17e.003.png)


