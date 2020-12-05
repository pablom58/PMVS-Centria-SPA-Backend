import { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
 
import { UserResolver } from '../components/User/resolver'

interface RouterInterface {
    (server : Application) : void
}

const Router : RouterInterface = async (server : Application) => {
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                UserResolver,
            ]
        }),
        context: ({ req , res }) => ({ req , res })
    })

    apolloServer.applyMiddleware({app: server,path: '/api'})
}

export default Router