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

  bnb_Value: number = 0;
  bnb_Usd: number = 0;

  ltc_Value: number = 0;
  ltc_Usd: number = 0;


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
    this.btc_Usd = this.Round(this.bnb.market_data.current_price.usd, 2);

    this.bnb_Value = this.Round(1, 8);
    this.bnb_Usd = this.Round(this.bnb.market_data.current_price.usd, 2);

    this.ltc_Value = this.Round(1, 8);
    this.ltc_Usd = this.Round(this.ltc.market_data.current_price.usd, 2);

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

  //

  bnbToUsd() {
    try {
      this.bnb_Usd = this.bnb_Value * this.bnb.market_data.current_price.usd;

      if (isNaN(this.bnb_Usd)) {
        this.bnb_Value = 1;
        this.bnb_Usd = this.bnb.market_data.current_price.usd;
      }
    } catch (err) {
      this.bnb_Value = 1;
      this.bnb_Usd = this.bnb.market_data.current_price.usd;
    } finally {
      this.bnb_Usd = this.Round(this.bnb_Usd, 2);
    }
  }

  usdToBnb() {
    try {
      this.bnb_Value = this.bnb_Usd / this.bnb.market_data.current_price.usd;
      if (isNaN(this.bnb_Usd) || isNaN(this.bnb_Value)) {
        this.bnb_Value = 1;
        this.bnb_Usd = this.bnb.market_data.current_price.usd;
      }
    } catch (err) {
      this.bnb_Value = 1;
      this.bnb_Usd = this.bnb.market_data.current_price.usd;
    } finally {
      this.bnb_Value = this.Round(this.bnb_Value, 8);
    }
  }

  //

  ltcToUsd() {
    try {
      this.ltc_Usd = this.ltc_Value * this.ltc.market_data.current_price.usd;

      if (isNaN(this.ltc_Usd)) {
        this.ltc_Value = 1;
        this.ltc_Usd = this.ltc.market_data.current_price.usd;
      }
    } catch (err) {
      this.ltc_Value = 1;
      this.ltc_Usd = this.ltc.market_data.current_price.usd;
    } finally {
      this.ltc_Usd = this.Round(this.ltc_Usd, 2);
    }
  }

  usdToLtc() {
    try {
      this.ltc_Value = this.ltc_Usd / this.ltc.market_data.current_price.usd;
      if (isNaN(this.ltc_Usd) || isNaN(this.ltc_Value)) {
        this.ltc_Value = 1;
        this.ltc_Usd = this.ltc.market_data.current_price.usd;
      }
    } catch (err) {
      this.ltc_Value = 1;
      this.ltc_Usd = this.ltc.market_data.current_price.usd;
    } finally {
      this.ltc_Value = this.Round(this.ltc_Value, 8);
    }
  }

  Round(num: number, places: number) {
    let factor = 10 ** places;
    return Math.round(num * factor) / factor;
  };
}
