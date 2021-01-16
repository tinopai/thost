import express from 'express'
const app = express()

import dotenv from 'dotenv'
dotenv.config()

import http from 'http'
http.createServer(app)
    .listen(process.env.PORT, () => {
        console.log(`Listening to ${process.env.PORT}`)
    })