import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Coin} from "../interfaces/coin.interface";

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  CargarMoneda(id: string) {
    return this.httpClient.get<Coin>('https://api.coingecko.com/api/v3/coins/' + id);
  }
}
