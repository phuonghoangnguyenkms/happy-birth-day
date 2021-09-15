import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlinkingLightComponent } from './components/present-screen/blinking-light/blinking-light.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CakeComponent } from './components/present-screen/cake/cake.component';
import { CommonModule } from '@angular/common';
import { ConfettiComponent } from './components/present-screen/confetti/confetti.component';
import { CurtainComponent } from './components/present-screen/curtain/curtain.component';
import { EnvelopeComponent } from './components/present-screen/envelope/envelope.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MessagePopupComponent } from './components/present-screen/message-popup/message-popup.component';
import { NgModule } from '@angular/core';
import { PresentScreenComponent } from './components/present-screen/present-screen.component';
import { ThemeCardComponent } from './components/present-screen/theme-card/theme-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BlinkingLightComponent,
    CakeComponent,
    ConfettiComponent,
    CurtainComponent,
    EnvelopeComponent,
    HomeComponent,
    LoginComponent,
    MessagePopupComponent,
    PresentScreenComponent,
    ThemeCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
