import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { NavComponent } from './nav/nav.component';

import { ChatService } from './chat.service';

// VENDOR
import { JwtModule } from '@auth0/angular-jwt';

export function getAccessToken() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessageInputComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: (getAccessToken),
        whitelistedDomains: ['localhost:4200', 'localhost:4000']
      }
    })
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})

export class AppModule { }
