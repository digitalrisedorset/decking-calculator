import {setupDeckingCalculatorRoutes} from "./deckingCalculator"
import {Application} from "express";

export default (app: Application) => {
    setupDeckingCalculatorRoutes(app)
}
