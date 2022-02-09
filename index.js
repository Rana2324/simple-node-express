const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Node to react js my learning')
  })

  const users = [
    {id:0, name: 'Sabana', email: 'sabana@gmail.com', password:18737},
    {id:1, name: 'Sabnur', email: 'sabanur@gmail.com', password:18737},
    {id:2, name: 'Bobita', email: 'bobita@gmail.com', password:18737},
    {id:3, name: 'Rubel', email: 'rubel@gmail.com', password:18737},
    {id:4, name: 'Sakib', email: 'sakib@gmail.com', password:18737},
    {id:5, name: 'Shuvo', email: 'shuvo@gmail.com', password:18737},
  ];

  app.post('/users',(req, res) => {
    const newUsers = req.body;
    newUsers.id = users.length;
    users.push(newUsers);
    console.log('Hitting th post', req.body);
    // res.send('post got hilted by user')
    res.json(newUsers)
  })

  app.get('/users', (req, res) => {
   const search = req.query.search;
   if(search){
     const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
     res.send(searchResult)
   }
    res.send(users)
  })

  app.listen(port, () => {
    console.log("Example app listening on port", port);
  })