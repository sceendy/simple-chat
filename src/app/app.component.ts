import { Component } from '@angular/core';

import { MessagesComponent } from './messages/messages.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
