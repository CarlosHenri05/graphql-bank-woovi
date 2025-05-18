import Koa from 'koa'

const app = new Koa()

const port: number = 3000

// Just testing Koa

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`)
})
