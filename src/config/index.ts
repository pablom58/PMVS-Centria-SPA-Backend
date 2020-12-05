require('dotenv').config()

export const PORT = process.env.PORT || 3000
export const URL_DATABASE = process.env.URL_DATABASE || 'mongodb://localhost:27017/centria_test'
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'VGhpcyBJcyB0aGUgU2VjcmV0IEtleSBGb3IgQ2VudHJpYSBTUEE='
export const HASH_SECRET_KEY = process.env.HASH_SECRET_KEY || 'VGhpcyBJcyB0aGUgU2VjcmV0IEtleSBGb3IgQ2VudHJpYSBTUEE='