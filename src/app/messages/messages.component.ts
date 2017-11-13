import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { ChatService } from '../chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MessagesComponent implements OnInit {
  @Input() status: string;
  private loading: boolean = true;
  private comments: Array<Object>;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.loading = this.status === 'loading';
    this.chatService.getMessages().subscribe(response => {
      this.comments = response.data;
    });
  }

}
