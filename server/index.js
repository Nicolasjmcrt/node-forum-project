const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const knex = require('knex')({
    client:'sqlite3',
    connection: {
        filename: './sqlite.db',
    },
    useNullAsDefault: true
});

app.use(express.json())
app.use(cors())


// Methods for users

app.get('/user', async (req, res) => {
    const data = await knex.select().from('user')
    res.json(data)
})

app.get('/user/:id', async (req, res) => {
    const data = await knex.select('*').from('user').where('id', '=', req.params.id)
    res.json(data)
})

app.delete('/user/:id', async (req, res) => {
    const data = await knex.del('*').from('user').where('id', '=', req.params.id)
    res.json(data)
})

app.post('/user', async (req, res) => {
    const data = await knex('user').insert(req.body)
    res.json(req.body)
})


// Methods for topics

app.get('/topic', async (req, res) => {
    const data = await knex.select().from('topic')
    res.json(data)
})

app.get('/topic/:id', async (req, res) => {
    const data = await knex.select('*').from('topic').where('id', '=', req.params.id)
    res.json(data)
})

app.delete('/topic/:id', async (req, res) => {
    const data = await knex.del('*').from('topic').where('id', '=', req.params.id)
    res.json(data)
})

app.post('/topic', async (req, res) => {
    const data = await knex('topic').insert(req.body)
    res.json(req.body)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})