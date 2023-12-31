import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout/checkout.service';
import { Film } from './film.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {
  listFilms: Film[] = [];
  listSelectedFilms!: number;
  hidden = false;

constructor(private checkoutServece: CheckoutService, private router: Router) { }

  ngOnInit(): void {
    this.checkoutServece.getListFilms().subscribe((film)=> {
      this.listFilms = film;
    })
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  toggleCount() {
    return this.listSelectedFilms = this.checkoutServece.listSelectedFilms.length;
  }
  toCheckout(): void {
    this.router.navigate(['../checkout']);
  }

}
