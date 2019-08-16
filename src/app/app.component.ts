import { Component, OnInit } from '@angular/core';
import { CardsService } from './services/cards-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cedh';
  classes = ['NEUTRAL','MAGE','HUNTER', 'PRIEST','WARRIOR','WARLOCK','DRUID','ROGUE','SHAMAN','PALADIN'];
  selectedClass: string;
  cards: any;
  acticeDeck = false;
  message: string;
  constructor(private cardService: CardsService) { }

  getCards(): void {
    console.log('this ran')
    this.cardService.getAllCards()
      .subscribe(cards => {
        console.log(cards)
        this.cards = cards
        console.log('this cards',this.cards);
      });
  }

  setClass(cardClass: string): void {
    this.selectedClass = cardClass;
  }

  receiveMessage($event) {
    this.message = $event;
    this.activeDeck = $event;
  }

 ngOnInit() {
   this.selectedClass = 'NEUTRAL';
    this.getCards();
  }

}
