import 'reflect-metadata'
import './store/mongo'

import express , { Application  } from 'express'

import morgan from 'morgan'
import cors from 'cors'

import { PORT } from './config'

import Router from './network/router'

const app : Application = express()

app.set('port',PORT)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

Router(app)

app.listen(app.get('port'),() => console.log(`Server on port: ${app.get('port')}`))