﻿///<reference path="../node_modules/angular2/typings/browser.d.ts" />  

import { bootstrap } from 'angular2/platform/browser'
import { ROUTER_PROVIDERS } from "angular2/router";
import { HTTP_PROVIDERS, HTTP_BINDINGS } from "angular2/http";
import { AppComponent } from './app'

bootstrap(AppComponent, [HTTP_BINDINGS, HTTP_PROVIDERS]);