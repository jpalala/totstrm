import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'

import ThoughtsController from './controllers/thoughts/thoughts.controller'
import HomeController from './controllers/home/home.controller'

const app = new App({
    port: 5000,
    controllers: [
        new HomeController(),
        new ThoughtsController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()
