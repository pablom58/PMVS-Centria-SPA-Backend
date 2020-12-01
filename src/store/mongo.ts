import mongoose , { ConnectionOptions } from 'mongoose'
import { URL_DATABASE } from '../config' 

interface MongooseInterface {
    urlConnect : string,
    config : ConnectionOptions
}

const mongooseConfig : MongooseInterface = {
    urlConnect : URL_DATABASE,
    config : {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
}

mongoose.connect(mongooseConfig.urlConnect,{...mongooseConfig.config})
    .then(response => console.log(`Database Connected: ${response.connection.name}`))
    .catch(error => console.error(`Error connecting database: ${error}`))