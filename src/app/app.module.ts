import { ClarityModule } from 'clarity-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyGridComponent } from './my-grid/my-grid.component';
import { UserRendererComponent } from './user-renderer/user-renderer.component';

@NgModule({
    declarations: [
        AppComponent,
        MyGridComponent,
        UserRendererComponent
    ],
    imports: [
        BrowserModule,
        ClarityModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
