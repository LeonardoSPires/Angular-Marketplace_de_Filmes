import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/views/checkout/checkout.service';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent implements OnInit {
unselectFilm() {
  this.disabled = false;
      this.checkoutService.unselectFilm()
}
selectFilm() {
  this.disabled = true;
      this.checkoutService.selectFilm();
}
  disabled = false;

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {



  }

}


