import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductionLine } from '../interfaces/production-line';
import { Fruit } from '../interfaces/fruit';
import { EnvironmentReadings } from '../interfaces/environment-readings';
import { FruitReadings } from '../interfaces/fruit-readings';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  // attributes
  // baseURL = "http://189.223.79.36:7000/api?action=";
  baseURL = "http://127.0.0.1:5000//api?action=";

  // constructor
  constructor(private http: HttpClient) { 
  }

  // ------------- Methods -------------
  // get data
  getFruits(): Observable<Fruit[]>{
    return this.http.get<Fruit[]>(this.baseURL + 'get_fruits');
  }

  getProductionLine(): Observable<ProductionLine[]>{
    return this.http.get<ProductionLine[]>(this.baseURL + 'get_productionLines');
  }

  getFruitReadings(): Observable<FruitReadings[]>{
    return this.http.get<FruitReadings[]>(this.baseURL + 'get_readings');
  }

  getEnvironmentReadings(): Observable<EnvironmentReadings[]>{
    return this.http.get<EnvironmentReadings[]>(this.baseURL + 'get_enviromentVariables');
  }

  // set data

  // update data

}

