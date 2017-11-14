import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ChatService } from '../chat.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MessageInputComponent {
  @Output() messageAdded = new EventEmitter<boolean>();
  public messageForm: NgForm;
  public errorMessage: string;
  public message: any;

  constructor(public chatService: ChatService) { }

  submitMessage(newMessage) {
    this.chatService
      .addMessage(newMessage.value)
      .subscribe(
        data => {
          console.log(data);
        },
        error => this.errorMessage = 'There was an error with submitting your message.',
        () => {
          newMessage.reset();
          this.messageAdded.emit(true);
        }
      );
  }
}
