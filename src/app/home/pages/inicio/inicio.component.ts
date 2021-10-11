import {Component, OnInit} from '@angular/core';
import {Coin} from "../../../api/interfaces/coin.interface";
import {CoinService} from "../../../api/services/coin.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  btc!: Coin;
  bnb!: Coin;
  ltc!: Coin;

  constructor(
    private coinService: CoinService
  ) {
  }

  async ngOnInit() {

    let fork = forkJoin([
      this.coinService.CargarMoneda('bitcoin'),
      this.coinService.CargarMoneda('binancecoin'),
      this.coinService.CargarMoneda('litecoin')
    ]);

    let taskResult = await fork.toPromise();
    this.btc = taskResult[0];
    this.bnb = taskResult[1];
    this.ltc = taskResult[2];

  }

}
