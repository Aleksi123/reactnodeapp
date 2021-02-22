const express = require('express')
const { Sequelize } = require('sequelize');

const app = express()
const port = 4000

// Connect to MySQL DB using Sequelize ORM
const sequelize = new Sequelize('db', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
sequelize
  .authenticate()
  .then(() => console.log('Connected to db.'))
  .catch(error => console.log('Unable to connect to the database:', error))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
