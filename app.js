// const express = require('express');
// const bodyParser = require('body-parser');
// const fs=require('fs');

// const app = express();
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// app.get('/', (req, res, next) => {
//     fs.readFile('username.txt',(err,data)=>{
//         if(err){
//             data='No chat Exists';
//         }
//         res.send(`<html><head><title>Message Page</title></head><body>${data}<form action="/" onSubmit="document.getElementById('username').value=localStorage.getItem('username') method="POST"><input type="text" name="message" id="message" placeholder="Enter Your Message" /><input type="hidden" name="username" /><button type="submit">Add Message</button></form></body></html>`);
//     })
    
// });

// app.post("/",(req,res,next)=>{
//     const name=req.body.username;
//     const msg=req.body.message;
//     const data=`${name}:${msg}`;
//     fs.writeFile('username.txt',data,{flag:'a'},(err)=>{
//         err ? console.log(err) : res.redirect('/')
//     });

// });

// app.get('/login', (req, res, next) => {
//     res.send(`<html><head><title>Username Page</head><body><form action="/" method="POST" onSubmit="localStorage.setItem(document.getElementById('username').value)"><input type="text" name="username" placeholder="Enter Your Name" id="username"><button type="submit">Login</button></form></body></html>`);
// });

// app.listen(3000);

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  fs.readFile('username.txt', (err, data) => {
    if (err) {
      data = 'No chat exists';
    }
    
    res.send(`
      <html>
        <head>
          <title>Message Page</title>
        </head>
        <body>
          ${data}
          <form action="/" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
            <input type="text" name="message" placeholder="Enter Your Message" />
            <input type="hidden" name="username" id="username" />
            <button type="submit">Add Message</button>
          </form>
        </body>
      </html>
    `);
  });
});

app.post('/', (req, res) => {
  console.log(req.body.username);
  console.log(req.body.message);
  
  fs.writeFile('username.txt',`${req.body.username}:${req.body.message}`, { flag: 'a' }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

app.get('/login', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Username Page</title>
      </head>
      <body>
        <form action="/" method="GET" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
          <input type="text" name="username" placeholder="Enter Your Name" id="username" />
          <button type="submit">Login</button>
        </form>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
