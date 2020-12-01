import express , { Application  } from 'express'
import './store/mongo'

import morgan from 'morgan'
import cors from 'cors'

import { PORT } from './config'

import Router from './network/router'
import { errors } from './network/errors'

const app : Application = express()

app.set('port',PORT)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

Router(app)
app.use(errors)

app.listen(app.get('port'),() => console.log(`Server on port: ${app.get('port')}`))