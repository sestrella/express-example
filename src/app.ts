/// <reference path="_all.d.ts" />
'use strict';

import * as express from 'express';
import * as path from 'path';

import { Index } from "./routes/index";
import { Users } from "./routes/users";

class Server {

  public static build(): express.Application {
    return new Server().app;
  }

  private app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config() {
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'hbs');
  }

  private routes() {
    this.app.use('/', Index.build());
    this.app.use('/users', Users.build());
  }
}

export = Server;
