import express from 'express'
const app = express()

import dotenv from 'dotenv'
dotenv.config()

app.get(`/`, (req, res) => {
    res.send(`WIP`)
})

import http from 'http'
http.createServer(app)
    .listen(Number(process.env.PORT), "0.0.0.0", 511, () => {
        console.log(`Listening to ${process.env.PORT}`)
    })
