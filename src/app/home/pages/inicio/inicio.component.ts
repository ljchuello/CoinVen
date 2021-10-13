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

  btc_Value: number = 0;
  btc_Usd: number = 0;


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

    this.btc_Value = this.Round(1, 8);
    this.btc_Usd = this.Round(this.btc.market_data.current_price.usd, 2);

  }

  btcToUsd() {
    try {
      this.btc_Usd = this.btc_Value * this.btc.market_data.current_price.usd;

      if (isNaN(this.btc_Usd)) {
        this.btc_Value = 1;
        this.btc_Usd = this.btc.market_data.current_price.usd;
      }
    } catch (err) {
      this.btc_Value = 1;
      this.btc_Usd = this.btc.market_data.current_price.usd;
    } finally {
      this.btc_Usd = this.Round(this.btc_Usd, 2);
    }
  }

  usdToBtc() {
    try {
      this.btc_Value = this.btc_Usd / this.btc.market_data.current_price.usd;
      if (isNaN(this.btc_Usd) || isNaN(this.btc_Value)) {
        this.btc_Value = 1;
        this.btc_Usd = this.btc.market_data.current_price.usd;
      }
    } catch (err) {
      this.btc_Value = 1;
      this.btc_Usd = this.btc.market_data.current_price.usd;
    } finally {
      this.btc_Value = this.Round(this.btc_Value, 8);
    }
  }

  Round(num: number, places: number) {
    let factor = 10 ** places;
    return Math.round(num * factor) / factor;
  };
}
