const Aya = require('../aya.js')

const app = new Aya()

app.use(async (req, res) => {
  req.test = 'hello2'
})

app.use((req, res) => {
  console.log(req.test) // would return "hello"
})

app.route('GET', '/', (req, res) => {
  res.end('Hello')
})

app.listen(80)
