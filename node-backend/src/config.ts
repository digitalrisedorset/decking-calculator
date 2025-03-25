const dotenv = require('dotenv');
dotenv.config();
const appRoot = require('app-root-path');

export type configInfo = {
    port: number;
    frontendUrl: string;
    route: {
        apiPrefix: string;
        deckingCalculatorApiPrefix: string
    }
}

export const config: configInfo = {
    port: (process.env.PORT === undefined)? 8080: Number(process.env.PORT),

    frontendUrl: (process.env.FRONTEND_URL === undefined)?'http://localhost:3001':process.env.FRONTEND_URL,

    /**
     * Routes access
     */
    route: {
        apiPrefix: '/',
        deckingCalculatorApiPrefix: '/deckingCalculator'
    },
    rootDir: appRoot.resolve('/'),
}
