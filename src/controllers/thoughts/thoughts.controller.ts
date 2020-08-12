import * as express from 'express'
import { Request, Response } from 'express'
import IThought from './thought.interface'
import IControllerBase from 'interfaces/IControllerBase.interface'

class ThoughtsController implements IControllerBase {
    public path = '/thoughts'
    public router = express.Router()

    private thoughts: IThought[] = [
        {
            id: 1,
            author: 'Joe',
            content: 'i just had coffee',
            title: 'coffee time',
            public: true,
            created_at: new Date()
        }
    ]

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path + '/:id', this.getThought)
        this.router.get(this.path, this.getAllThoughts)
        this.router.post(this.path, this.createThought)
    }

    getThought = (req: Request, res: Response) => {
        const id = +req.params.id
        let result = this.thoughts.find(thought => thought.id == id)

        if (!result) {
            res.status(404).send({
                'error': 'Thought not found!'
            })
        }
        
        res.render('thoughts/index', result)
    }

    getAllThoughts = (req: Request, res: Response) => {
        res.send(this.thoughts)
    }

    createThought = (req: Request, res: Response) => {
        const thought: IThought = req.body
        this.thoughts.push(thought)
        res.send(this.thoughts)
    }
}

export default ThoughtsController
