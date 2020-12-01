import { Application } from 'express'

interface RouterInterface {
    (server : Application) : void
}

const Router : RouterInterface = (server : Application) => {
    server.use('/home',(req,res) => res.json({hola: 'hola'}))
}

export default Router