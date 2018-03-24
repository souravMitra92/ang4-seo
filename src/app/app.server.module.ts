/*
 * File: app.server.module.ts
 * Project: ang4-seo
 * Created on: Saturday, 24th March 2018 9:38:05 am
 * Author: SOURAV
 */

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        ServerModule,
        AppModule
    ],
    bootstrap: [AppComponent]
})

export class AppServerModule { }