import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cardCollection = {
    NEUTRAL: [],
    MAGE: [],
    HUNTER: [],
    PRIEST: [],
    WARRIOR: [],
    WARLOCK: [],
    DRUID: [],
    ROGUE: [],
    SHAMAN: [],
    PALADIN: []

  };

  constructor(
    private http: HttpClient,
  ) {
  }

  getAllCards(): any {
    return this.http.get<any[]>('http://www.localhost:9000/cards')
      .pipe(
        map(cards => {
          cards.map((card, cardIndex ) => {
              if (this.cardCollection[card.cardClass] !== undefined && cardIndex < 500) {
                this.cardCollection[card.cardClass].push(card);
              }
            }
          );
          //this.cardCollection.push(cards);
          return this.cardCollection;
        })
      );
  }


}
