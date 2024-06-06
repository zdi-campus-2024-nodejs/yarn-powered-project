import express, {Request, Response} from 'express';
import cors, {CorsOptions} from 'cors';
import http from 'http';
import {Logger} from "tslog";
import {Status} from "@app/model/src/Status";
import {UtilityService} from "@app/utility/src/utility.service";

const logger = new Logger({ type: 'pretty' });

const port = process.env.PORT || 3000;

const app = express()
    .use(cors({
        origin: (origin, callback) => {
            logger.trace('[server]', 'cors', origin);
            callback(null, `${!!origin ? origin : `*`}`)
        },
        allowedHeaders: '*',
        methods: 'GET, OPTIONS, HEAD, POST, PUT, DELETE',
        credentials: true
    } as CorsOptions))
    .get('/', (req: Request, res: Response) => {
        logger.info('[server]', '/');
        res.send({
            status: 'OK'
        } as Status);
    })
    .get('/calculate', (req: Request, res: Response) => {
        logger.info('[server]', '/calculate');
        const xQueryParam = req.query['x'];
        const yQueryParam = req.query['y'];
        res.send({
            result: new UtilityService().calculate(Number(xQueryParam), Number(yQueryParam))
        });
    })

http.createServer(app).listen(port, () => {
    logger.info(`[server]: Server is running at http://localhost:${port}`);
});