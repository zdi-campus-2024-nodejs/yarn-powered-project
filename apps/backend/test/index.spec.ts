import express, {Request, Response} from "express";
import {Status} from "@app/model/src/Status";
import http, {RequestListener} from "http";
import {Logger} from "tslog";

const logger = new Logger({ type: 'pretty' });

describe('express server', () => {
  beforeAll(() => {
    // @ts-ignore
    http.createServer = jest.fn((app?: RequestListener<any, any>) => {
      return { listen: (port?: number, listeningListener?: () => void) => {} };
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('start server', async () => {
    // given
    const app = express().get('/', (req: Request, res: Response) => {
      res.send({ status: 'OK' } as Status);
    })

    // when
    http.createServer(app).listen(3000, () => {
      logger.info(`[server]: Server is running at http://localhost:${3000}`);
    });

    // then
    expect(app).toBeDefined();
  });
})

