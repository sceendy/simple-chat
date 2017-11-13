import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ChatService } from './chat.service';

import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'app';
  public setMessages: boolean = false;
  public username: string = '';
  public created: string;

  constructor(public chatService: ChatService) {}

  ngOnInit() {
    this.chatService
      .createSession()
      .subscribe(session => {
        this.username = session['included'][0]['attributes'].username;
        this.created = session['data']['attributes']['created_at'];
        this.setMessages = true;
      });
  }
}
