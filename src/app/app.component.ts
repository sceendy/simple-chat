import { Component, OnInit } from '@angular/core';

import { ChatService } from './chat.service';

import { MessagesComponent } from './messages/messages.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'app';
  public setMessages: boolean = false;

  constructor(public chatService: ChatService) {}

  ngOnInit() {
    this.chatService.createSession().subscribe(data => {
      this.setMessages = true;
    });
  }
}
