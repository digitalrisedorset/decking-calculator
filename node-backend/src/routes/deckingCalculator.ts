import express, { Application, Request, Response, NextFunction } from 'express'
import { config } from "../config";
import { corsOptions } from '../lib/cors-setup'
import {DeckingCalculatorController} from "../controller/DeckingCalculatorController";

export const setupDeckingCalculatorRoutes = (app: Application) => {
    const router = express.Router()
    const options = corsOptions();
    router.use(options)

    const deckingCalculatorController = new DeckingCalculatorController()

    router.use('/', (req: Request, res: Response, next: NextFunction) => {
        console.log(`decking calculator request: ${req.url}`)
        next()
    })

    router.post("/create-shape", deckingCalculatorController.createShape)

    router.get("/shapes", deckingCalculatorController.getShapes)

    router.get("/shape/:code", deckingCalculatorController.getShape)

    router.options('*', options);

    app.use(config.route.deckingCalculatorApiPrefix, router)
}
