import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from 'interfaces/IControllerBase.interface'

class HomeController implements IControllerBase {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/', this.index)
    }

    index = (req: Request, res: Response) => {

        const thoughts = [
            {
    id: 1,
    author: 'Joe Palala',
    content: 'something about whatever',
    title: 'something about...',
    public: true,
    created_at: Date.now()
            }
        ]

        res.render('home/index', { thoughts })
    }
}

export default HomeController
