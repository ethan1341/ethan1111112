import { Component, OnInit, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  constructor() { }
  activeDeck = false;
  deck: any = {
    new: true,
    name: 'deck'
  };
  buildDeck(activity) {
    this.activeDeck = activity;
    this.sendDeckActivity();
  }

  @Output() messageEvent = new EventEmitter<boolean>();

  sendDeckActivity() {
    console.log('this ran', this.activeDeck);
    this.messageEvent.emit(this.activeDeck);
  }
  ngOnInit() {
  }

}
