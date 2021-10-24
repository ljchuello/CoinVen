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
    await this.load();
  }

  async load(): Promise<void> {
    let fork = forkJoin([
      this.coinService.CargarMoneda('bitcoin'),
      this.coinService.CargarMoneda('binancecoin'),
      this.coinService.CargarMoneda('litecoin')
    ]);

    let taskResult = await fork.toPromise();
    this.btc = taskResult[0];
    this.bnb = taskResult[1];
    this.ltc = taskResult[2];

    this.btc_Value = 1;
    this.btc_Usd = this.btc.tickers.find(x => x.target == 'USDT' && x.market.name == 'Binance')!.last;

    this.bnb_Value = 1;
    this.bnb_Usd = this.bnb.tickers.find(x => x.target == 'USDT' && x.market.name == 'Binance')!.last;

    this.ltc_Value = 1;
    this.ltc_Usd = this.ltc.tickers.find(x => x.target == 'USDT' && x.market.name == 'Binance')!.last;
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
    }
  }
}
