import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { NavBarComponent } from './shared/navbar.component';
import { DayLengthComponent } from './day-length';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        DayLengthComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
