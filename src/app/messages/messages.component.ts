import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MessagesComponent implements OnInit {
  @Input() status: string;
  private loading: boolean = true;

  constructor() { }

  ngOnInit() {
    this.loading = this.status === 'loading';
  }

}
