import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { ChatService } from '../chat.service';
import { MessageInputComponent } from '../message-input/message-input.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MessagesComponent implements OnInit {
  @Input() status: string;
  public loading: boolean = true;
  public errorMessage: string;
  public messages: Array<Object>;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.loading = this.status === 'loading';
    this.updateMessages();
  }

  updateMessages() {
    return this.chatService
      .getMessages()
      .subscribe(
        response => this.messages = response.data,
        error => this.errorMessage = 'Sorry, the following error has occurred: ' + error
      );
  }
}
