import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/view/checkout/checkout.service';
import { Film } from 'src/app/view/home/list-films/film.model';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css']
})
export class CardFilmComponent implements OnInit {
  listFilms: Film[] = [];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getListFilms().subscribe((film) => {
      this.listFilms = film;
      console.log(this.listFilms);
    })

  }
}
