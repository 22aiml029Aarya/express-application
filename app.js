const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// {
// app.get('/', (req, res) => {
//     // res.send('Hello World!')
//     res.sendFile(__dirname+'/home.html')
//   })

// app.get('/home', (req, res) => {
//     res.send('Home')
//     res.sendFile(__dirname+'/home.html')
//   })

//   app.get('/about', (req, res) => {
//     res.send('About')
//     res.sendFile(__dirname+'/about.html')
//   })

//   app.get('/contact', (req, res) => {
//     res.send('Contact')
//     res.sendFile(__dirname+'/contact.html')
//   })
// }
// {app.get('/Home', (req, res) => {
//     res.send('Home')
//   })

// app.get('/Contact', (req, res) => {
//     res.send('Contact')
//   })

// app.get('/Help', (req, res) => {
//     res.send('Help')
//   })
// }

  app.get('/', (req, res) => {
    res.sendFile(__dirname+'/contact.html')
  })


app.get('/process', (req, res) => {
      var english = parseInt(req.query.english);
      var hindi = parseInt(req.query.hindi);
      var maths = parseInt(req.query.maths);
      var science = parseInt(req.query.science);
      var sum = english + hindi + maths + science;

      var borderColor = sum > 150 ? 'green' : 'red';

      var output = `
      <html>
        <head>
          <title>Subject Scores</title>
        </head>
        <body>
          <h1>Subject Scores</h1>
          <table border="1" style="border-color: ${borderColor};">
            <tr>
              <th>Subject</th>
              <th>Score</th>
            </tr>
            <tr>
              <td>English</td>
              <td>${english}</td>
            </tr>
            <tr>
              <td>Hindi</td>
              <td>${hindi}</td>
            </tr>
            <tr>
              <td>Maths</td>
              <td>${maths}</td>
            </tr>
            <tr>
              <td>Science</td>
              <td>${science}</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>${sum}</strong></td>
            </tr>
          </table>
        </body>
      </html>
    `;
  
    res.send(output);
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log("Surver is running on http://127.0.0.1:3000/");
})
