/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { PingService } from './services/ping.service';
import { SimpleService } from './services/simple.service';
import { CoinsService } from './services/coins.service';
import { ContractService } from './services/contract.service';
import { AssetPlatformsService } from './services/asset-platforms.service';
import { CategoriesService } from './services/categories.service';
import { ExchangesService } from './services/exchanges.service';
import { FinanceService } from './services/finance.service';
import { IndexesService } from './services/indexes.service';
import { DerivativesService } from './services/derivatives.service';
import { StatusUpdatesService } from './services/status-updates.service';
import { EventsService } from './services/events.service';
import { ExchangeRatesService } from './services/exchange-rates.service';
import { TrendingService } from './services/trending.service';
import { GlobalService } from './services/global.service';
import { CompaniesBetaService } from './services/companies-beta.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    PingService,
    SimpleService,
    CoinsService,
    ContractService,
    AssetPlatformsService,
    CategoriesService,
    ExchangesService,
    FinanceService,
    IndexesService,
    DerivativesService,
    StatusUpdatesService,
    EventsService,
    ExchangeRatesService,
    TrendingService,
    GlobalService,
    CompaniesBetaService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
